import Header from "./common/Header"
import Start from "./sections/start/Start"

function App() {

  return (
    <>
    <Header/>
    <main className='bg-[url(/fondo.jpg)] bg-center bg-fixed bg-cover bg-no-repeat bg-blend-overlay bg-black/60 relative flex flex-col gap-10 w-full min-h-dvh justify-center items-center '>
      <section className="mt-20">
        <Start/>
      </section>
    </main>
    </>
  )
}

export default App
