import services from "./Data"

function Services(){
    return(
        <>
        <div className="flex justify-center items-center">
            <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-stretch">
            {services.map(data =>(
                <div className="flex flex-col h-full justify-center gap-2 bg-black/10 backdrop-blur-2xl p-6 rounded-lg border-1 border-[#035f78]">
                    <div className="flex gap-2 items-center text-[#035f78]">
                        <div className="p-2 bg-black/10 backdrop-blur-2xl rounded-lg border-1 border-[#035f78]">
                            {data.icon}
                        </div>
                        <span className="font-semibold text-xl">{data.title}</span>
                    </div>
                    <span>{data.description}</span>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Services;