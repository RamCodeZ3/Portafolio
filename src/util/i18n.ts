import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivos de traducción
const resources = {
  es: {
    translation: {
     header: {
        start: 'Inicio',
        experience: 'Experiencia',
        projects: 'Proyectos',
        services: 'Servicios',
        about: 'Sobre',
        contacts: 'Contactos',
        changeLanguage: 'Cambiar idioma',
      },
     start: {
        title: "Hola, soy",
        description: "Soy programador Full-Stack, apasionado por la tecnología, siempre dispuesto a afrontar nuevos desafíos y enfocado en desarrollar proyectos de alta calidad, escalables y profesionales.", 
     },
     experience: {
      title: "Experiencia",
      description1: "Desarrollador web responsable de la creación completa del sitio oficial de la empresa, utilizando React, JavaScript y Tailwind CSS. Me encargué del diseño, desarrollo e implementación, asegurando un resultado moderno, funcional y optimizado para distintos dispositivos.",
      description2: "Desarrollador web responsable de la creación de un clon de NameMC con catálogo en tiempo real de skins y capas. Me encargué del diseño e implementación, integrando renderizado 3D, búsquedas optimizadas y funciones sociales para una experiencia interactiva y escalable.",
      description3: "Colaboré como desarrollador full-stack en un proyecto de alquiler de vehículos en Bucaramanga, creando la interfaz de ofertas, nosotros y catálogo, además de formularios administrativos y servicios conectados a la base de datos para gestión eficiente."
     },
     services: {
      title: "Servicios",
      service1: "Desarrollo Web Full-Stack",
      description1:"Diseño y desarrollo de aplicaciones web completas, desde la interfaz visual hasta la lógica del servidor. Sitios responsivos, APIs, bases de datos y despliegue en la nube.",
      service2: "Creación de Bots",
      description2:"Automatizo tareas y mejoro la interacción en redes sociales, mensajería y plataformas. Desarrollo bots para WhatsApp, Telegram, Discord y sistemas empresariales internos.",
      service3: "Programación con Python",
      description3:"Desarrollo programas personalizados y scripts para automatizar procesos, analizar datos y conectar con APIs. Soluciones adaptadas para optimizar el trabajo y mejorar la productividad.",
      service4: "Web Scraping",
      description4:"Creo herramientas para extraer, procesar y organizar datos desde la web. Uso Python para scraping avanzado, integración de APIs y automatización de reportes personalizados.",
     },
     about: {
      title: "Sobre mi",
      description: "Soy una persona apasionada por el desarrollo de software, con experiencia en una amplia variedad de proyectos. Creo firmemente en la importancia de seguir principios sólidos y aplicar las mejores prácticas en cada proyecto que emprendo. Mi enfoque se basa en construir soluciones robustas y eficientes, fundamentadas en estándares de calidad y metodologías probadas, siempre buscando la excelencia en todo lo que hago y la satisfacción del cliente.",
     },
     contacts: {
      title: "Contactos",
      formTitle: "Envíame un mensaje",
      formDescription: "Completa el formulario y te responderé lo antes posible",
      formSpanName: "Nombre",
      formInputName: "Tu nombre",
      formSpanService:"Servicio",
      formOptionService: "Selecciona un servicio",
      formOptionService1: "Sitio Web",
      formOptionService2: "Automatización de tareas",
      formOptionService3: "Otro",
      formSpanMessage: "Mensaje",
      formTextareaMessage: "¿Cómo te puedo ayudar?",
      formButton: "Enviar Mensaje",
      fastTitle: "Contacto Rápido",
      fastDescription1: "Enviame un correo electronico",
      fastDescription2: "Comienza una conversacion conmigo",
      workingTitle: "Horarios de atención",
      workingDays: "Lunes-Viernes",
      workingDay1: "Sábado",
      workingDay2: "Domingo",
      workingDay2Close: "No disponible",
     }
    },
  },
  
  en: {
    translation: {
      header: {
        start: 'Home',
        experience: 'Experience',
        projects: 'Projects',
        services: 'Services',
        about: 'About',
        contacts: 'Contacts',
        changeLanguage: 'Change language',
      },
      start: {
        title: "Hello, I am",
        description: "I am a full-stack programmer, passionate about technology, always willing to take on new challenges, and focused on developing high-quality, scalable, and professional projects.", 
     },
     experience: {
      title: "Experience",
      description1: "Web developer responsible for the complete creation of the company's official website, using React, JavaScript, and Tailwind CSS. I was responsible for the design, development, and implementation, ensuring a modern, functional, and optimized result for different devices.",
      description2: "Web developer responsible for creating a NameMC clone with a real-time catalog of skins and capes. I handled the design and implementation, integrating 3D rendering, optimized searches for name and UUID, and social features for an interactive and scalable experience.",
      description3: "I collaborated as a full-stack developer on a vehicle rental project in Bucaramanga, creating the interface for offers, about us, and the catalog, as well as administrative forms and database-connected services to ensure efficient management throughout the platform."
     },
     services: {
      title: "Services",
      service1: "Full-Stack Web Development",
      description1: "Design and development of complete web applications, from visual interfaces to server-side logic. Responsive websites, APIs, databases, and cloud deployment.",
      service2: "Bot Creation",
      description2: "I automate tasks and enhance interaction on social media, messaging, and platforms. I develop bots for WhatsApp, Telegram, Discord, and internal business systems.",
      service3: "Python Programming",
      description3: "I create custom programs and scripts to automate processes, analyze data, and connect with APIs. Tailored solutions to optimize work and improve productivity.",
      service4: "Web Scraping",
      description4: "I build tools to extract, process, and organize data from the web. I use Python for advanced scraping, API integration, and automation of customized reports.",
    },
     about: {
      title: "About me",
      description: "I am a passionate person in developer software with experience in a wide variety of projects. I firmly believe in the importance of adhering to solid principles and applying best practices in every project I undertake. My approach focuses on building robust and efficient solutions, grounded in quality standards and proven methodologies, always striving for excellence in everything I do and ensuring client satisfaction.",
     },
     contacts: {
      title: "Contacts",
      formTitle: "Send me a message",
      formDescription: "Fill out the form and I’ll get back to you as soon as possible",
      formSpanName: "Name",
      formInputName: "Your name",
      formSpanService: "Service",
      formOptionService: "Select a service",
      formOptionService1: "Website",
      formOptionService2: "Task automation",
      formOptionService3: "Other",
      formSpanMessage: "Message",
      formTextareaMessage: "How can I help you?",
      formButton: "Send Message",
      fastTitle: "Quick Contact",
      fastDescription1: "Send me and email",
      fastDescription2: "Start a conversation with me",
      workingTitle: "Business Hours",
      workingDays: "Monday-Friday",
      workingDay1: "Saturday",
      workingDay2: "Sunday",
      workingDay2Close: "Not available",
    }
    },
  },
  // Agrega más idiomas según sea necesario
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;