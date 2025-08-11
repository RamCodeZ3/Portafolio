function Header(){
    
    function handleDivClick(){
        window.location.reload()
    }

    return(
        <>
        <div className="fixed flex justify-center items-center w-full h-18 z-10 top-0 p-4 ">
            <div className="flex bg-gradient-to-r from-[#035f78] to-[#121e4e] w-[90%] p-0.5 items-center justify-center rounded-lg">
                <header className="flex w-full z-10 top-0 left-0 py-2 px-2 text-white items-center justify-around rounded-lg bg-neutral-900">
                    <div className="flex items-center"
                        onClick={handleDivClick}
                        >
                        <img src="/imagenHeader.png" className="" alt="" />
                        <span className="font-bold text-lg">RamCode</span>
                    </div>
                    <div className="flex gap-4">
                        <a href='#start'>Inicio</a>
                        <a href="">Experiencia</a>
                        <a href="">Proyectos</a>
                        <a href='#add'>Servicios</a>
                        <a href="">Sobre mi</a>
                        <a href='#start'>Contactos</a>
                     </div>
                </header>
            </div>
       </div>
        </>
    )
}

export default Header;