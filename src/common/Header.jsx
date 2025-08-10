function Header(){
    
    function handleDivClick(){
        window.location.reload()
    }

    return(
        <>
        <div className="fixed flex justify-center items-center w-full h-18 z-10 top-0">

        <header className="flex w-[90%] z-10 top-0 left-0 py-1 px-2  text-white items-center justify-around border-1 border-blue-600 rounded-lg bg-white/10 backdrop-blur-2xl">
            <div className="flex"
            onClick={handleDivClick}
            >
            <span className="font-bold text-lg">RamCode</span>
            </div>
            <div className="flex gap-4">
                <a href='#start'>Inicio</a>
                <a href='#add'>Servicios</a>
                <a href="">Sobre mi</a>
                <a href="">Proyectos</a>
                <a href='#start'>Contactos</a>
            </div>
        </header>
       </div>
        </>
    )
}

export default Header;