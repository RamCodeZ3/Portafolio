function Form(){
    return(
        <>
        <div className="flex flex-col gap-3 p-4 bg-black/10 backdrop-blur-2xl rounded-lg border-1 border-[#035f78]">
           <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">Enviame un mensaje</span>
            <span>Completa el formulario y te respondere lo ante posible</span>
           </div>

            <form action="" className="flex flex-col gap-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="font-semibold">Nombre</label>
                        <input type="text" placeholder="Tu nombre" className="bg-black/10 px-2 py-1.5 backdrop-blur-2xl rounded-md border-1 border-[#035f78]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="font-semibold">Email</label>
                        <input type="text" placeholder="tucorreo@gmail.com" className="bg-black/10 px-2 py-1.5 backdrop-blur-2xl rounded-md border-1 border-[#035f78]"/>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-semibold">Servicio</label>
                    <select name="" id="" className="bg-black/10 px-2 py-1.5 backdrop-blur-2xl rounded-md border-1 border-[#035f78]">
                        <option value="">Selecciona un servicio</option>
                        <option value="web">Sitio Web</option>
                        <option value="bot">Bot</option>
                        <option value="webscraping">Web Scraping</option>
                        <option value="Automatizacion de tareas">Automatizacion de tarea</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-semibold">Mensaje</label>
                    <textarea name="" id="" placeholder="Como te puedo ayudar..." className="h-20 bg-black/10 px-2 py-1.5 backdrop-blur-2xl rounded-md border-1 border-[#035f78]">
                    </textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-[#035f78] to-[#121e4e] py-2 font-semibold rounded-lg">
                    Enviar Mensaje
                </button>
            </form>
        </div>
        </>
    )
}

export default Form;