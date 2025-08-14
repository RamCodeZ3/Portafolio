import Header from "./common/Header"
import Start from "./sections/start/Start"
import Services from "./sections/programmingServices/Services"

function App() {

  return (
    <>
    <Header/>
    <main className='bg-[url(/fondo.jpg)] bg-center bg-fixed bg-cover bg-no-repeat bg-blend-overlay bg-black/60 relative flex flex-col gap-6 w-full min-h-dvh justify-center items-center '>
      <section className="mt-20">
        <Start/>
      </section>
      <section className="">
        <Services/>
      </section>
    </main>
    </>
  )
}

export default App
