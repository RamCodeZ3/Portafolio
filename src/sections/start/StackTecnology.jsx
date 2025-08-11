import technologies from "./Data"

function StackTecnology(){
    return(
        <>
        <div className="flex gap-2 w-full justify-around mt-6">
            {technologies.map(data =>(
                <div className="bg-[#035f78] p-0.5 rounded-lg select-none">
                    <div className="flex flex-col justify-center items-center bg-neutral-900 p-2 rounded-lg w-25">
                        <img
                        src={data.path}
                        className="size-12"
                        />
                        <span className="font-semibold">{data.name}</span>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default StackTecnology;