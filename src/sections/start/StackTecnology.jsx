import technologies from "./Data"

function StackTecnology(){
    return(
        <>
        <div className="flex gap-2 w-full justify-around mt-6">
            {technologies.map(data =>(
                    <div className="flex flex-col justify-center items-center bg-black/10 backdrop-blur-2xl p-2 rounded-lg w-25 border-1 border-[#035f78]">
                        <img
                        src={data.path}
                        className="size-12"
                        />
                        <span className="font-semibold">{data.name}</span>
                    </div>
            ))}
        </div>
        </>
    )
}

export default StackTecnology;