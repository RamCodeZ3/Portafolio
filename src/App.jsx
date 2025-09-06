import Header from "./common/Header"
import Start from "./sections/start/Start"
import Experiencie from "./sections/experience/Experience"
import Services from "./sections/programmingServices/Services"
import About from "./sections/about/About"
import Contacts from "./sections/contacts/Contacts"
import Footer from "./common/footer"


function App() {

  return (
    <>
    <Header/>
    <main className={`bg-[url(general/fondo.jpg)] bg-center bg-fixed bg-cover bg-no-repeat bg-blend-overlay bg-black/60 relative flex flex-col gap-6 w-full min-h-dvh justify-center items-center `}>
      <section id="start" className="mt-20">
        <Start/>
      </section>
      <section id="exp" className="w-full">
        <Experiencie/>
      </section>
      <section id="services" className="w-full">
        <Services/>
      </section>
      <section id="about" className="w-full">
        <About/>
      </section>
      <section id="contacts" className="w-full">
        <Contacts/>
      </section>
      <Footer/>
    </main>
    </>
  )
}

export default App
