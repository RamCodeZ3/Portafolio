import technologies from "./Data"

function StackTecnology(){
    return(
        <>
        <div className="grid gap-8 grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 md:gap-x-18 lg:gap-11 w-full justify-around mt-6">
            {technologies.map(data =>(
                    <div className="card2 flex flex-col justify-center items-center  p-2 w-25">
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