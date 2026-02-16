// components/ParticleBackground.tsx
import { useEffect, useRef, useState } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  speed?: number;
  connectionDistance?: number;
  showConnections?: boolean;
  inactivityDelay?: number; // en milisegundos
}

export default function ParticleBackground({
  particleCount = 50,
  particleColor = '#ffffff',
  particleSize = 2,
  speed = 0.3,
  connectionDistance = 120,
  showConnections = true,
  inactivityDelay = 20000, // 20 segundos por defecto
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [opacity, setOpacity] = useState(0);
  const inactivityTimerRef = useRef<number | null>(null);

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;

    constructor(width: number, height: number) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * speed;
      this.vy = (Math.random() - 0.5) * speed;
      this.size = particleSize;
    }

    update(width: number, height: number) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = particleColor;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Manejo de inactividad y scroll
  useEffect(() => {
    const handleUserActivity = () => {
      // Desvanecer partículas cuando hay actividad
      setOpacity(0);

      // Limpiar el timer anterior
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }

      // Iniciar nuevo timer de inactividad
      inactivityTimerRef.current = setTimeout(() => {
        setOpacity(1);
      }, inactivityDelay);
    };

    // Escuchar eventos de scroll
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('mousedown', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    // Iniciar el timer al montar el componente
    inactivityTimerRef.current = setTimeout(() => {
      setOpacity(1);
    }, inactivityDelay);

    return () => {
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('mousedown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [inactivityDelay]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({ width: canvas.width, height: canvas.height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    particlesRef.current = Array.from(
      { length: particleCount },
      () => new Particle(canvas.width, canvas.height)
    );

    return () => window.removeEventListener('resize', updateDimensions);
  }, [particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const particles = particlesRef.current;

        particles.forEach((particle) => {
          particle.update(canvas.width, canvas.height);
          particle.draw(ctx);
        });

        if (showConnections) {
          ctx.strokeStyle = particleColor;
          ctx.lineWidth = 0.5;

          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < connectionDistance) {
                const opacity = 1 - distance / connectionDistance;
                ctx.globalAlpha = opacity * 0.15;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
          ctx.globalAlpha = 1;
        }

        lastTime = currentTime - (deltaTime % frameInterval);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, showConnections, connectionDistance, particleColor, speed, particleSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ 
        zIndex: 0,
        opacity: opacity
      }}
    />
  );
}