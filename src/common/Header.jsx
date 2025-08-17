function Header(){
    
    function handleDivClick(){
        window.location.reload()
    }

    return(
        <>
        <div className="fixed flex justify-center items-center w-full h-18 z-10 top-0 p-4 ">
                <header className="flex w-[90%] z-10 top-0 left-0 py-2 px-2 text-white items-center justify-around rounded-lg bg-black/40 backdrop-blur-2xl border-1 border-[#035f78]">
                    <div className="flex items-center"
                        onClick={handleDivClick}
                        >
                        <img src="/imagenHeader.png" className="" alt="" />
                        <span className="font-bold text-lg">RamCode</span>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <a href='#start'>Inicio</a>
                        <a href="">Experiencia</a>
                        <a href="">Proyectos</a>
                        <a href='#add'>Servicios</a>
                        <a href="">Sobre mi</a>
                        <a href='#start'>Contactos</a>
                     </div>
                     <select name="" id="">
                        <option value="">Español</option>
                        <option value="">Ingles</option>
                     </select>
                </header>
            </div>
        </>
    )
}

export default Header;