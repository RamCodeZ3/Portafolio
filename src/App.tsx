import { useState, useEffect } from "react";
import Header from "./common/Header";
import Start from "./sections/start/Start";
import Experiencie from "./sections/experience/Experience";
import Services from "./sections/programmingServices/Services";
import About from "./sections/about/About";
import Contacts from "./sections/contacts/Contacts";
import Footer from "./common/Footer";
import Animation from "./sections/animation/Animation";

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
        <Header />
        <main className="bg-[#121212] relative flex flex-col gap-2 w-full min-h-dvh justify-center items-center overflow-x-hidden">
          <section id="start" className="mt-22">
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
