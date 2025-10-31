import technologies from "../data/data"

export default function StackTecnology(){
    return(
        <>
        <div className="grid gap-6 grid-cols-3 sm:grid-cols-4 lg:grid-cols-10 md:gap-x-5 lg:gap-4 w-full justify-around mt-6">
            {technologies.map(data =>(
                    <div className="card2 flex flex-col justify-center items-center p-2 w-25">
                        <img
                            src={data.path}
                            className="size-10"
                        />
                        <span className="font-semibold text-sm">{data.name}</span>
                    </div>
            ))}
        </div>
        </>
    )
}
