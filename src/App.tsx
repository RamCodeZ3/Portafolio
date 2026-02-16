import { useState, useEffect } from "react";
import Header from "./common/Header";
import Start from "./sections/start/Start";
import Experiencie from "./sections/experience/Experience";
import Services from "./sections/programmingServices/Services";
import About from "./sections/about/About";
import Contacts from "./sections/contacts/Contacts";
import Footer from "./common/Footer";
import Animation from "./sections/animation/Animation";
import ParticleBackground from "./common/ParticleBackground";

export default function App() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => setActive(true), 3000);

    if (!active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => clearTimeout(time);
  }, [active]);

  return (
    <>
      <Animation active={!active} />

      <div className={`${active ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        {/* Fondo de partículas - se muestra solo cuando active es true */}
        {active && (
          <ParticleBackground
            particleCount={50}
            particleColor="#0091b969"
            particleSize={2}
            speed={0.25}
            connectionDistance={120}
            showConnections={true}
            inactivityDelay={20000} 
          />
        )}
        
        <main className="relative flex flex-col gap-2 w-full min-h-dvh justify-center items-center overflow-x-hidden" style={{ zIndex: 2 }}>
          <Header />
          <section id="start" className="mt-26 md:mt-22 lg:mt-26 2xl:mt-30 w-full flex justify-center items-center">
            <Start />
          </section>
          <section id="exp" className="w-full">
            <Experiencie />
          </section>
          <section id="services" className="w-full">
            <Services />
          </section>
          <section id="about" className="w-full">
            <About />
          </section>
          <section id="contacts" className="w-full">
            <Contacts />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}