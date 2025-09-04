import Header from "./common/Header"
import Start from "./sections/start/Start"
import Experiencie from "./sections/experience/Experience"
import Services from "./sections/programmingServices/Services"
import Contacts from "./sections/contatcs/Contatcs"


function App() {

  return (
    <>
    <Header/>
    <main className={`bg-[url(general/fondo.jpg)] bg-center bg-fixed bg-cover bg-no-repeat bg-blend-overlay bg-black/60 relative flex flex-col gap-6 w-full min-h-dvh justify-center items-center `}>
      <section className="mt-20">
        <Start/>
      </section>
      <section className="w-full">
        <Experiencie/>
      </section>
      <section className="w-full">
        <Services/>
      </section>
      <section className="w-full">
        <Contacts/>
      </section>
      
    </main>
    </>
  )
}

export default App
