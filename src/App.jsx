import Header from "./common/Header"
import Start from "./sections/start/Start"

function App() {

  return (
    <>
    <Header/>
    <main className='bg-neutral-900 flex flex-col gap-10 w-full min-h-dvh justify-center items-center '>
      <section>
        <Start/>
      </section>
    </main>
    </>
  )
}

export default App
