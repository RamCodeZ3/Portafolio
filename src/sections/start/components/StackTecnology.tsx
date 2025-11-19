import technologies from "../data/data"

export default function StackTecnology(){
    return(
        <>
        <div className="flex gap-4 items-center w-full mt-3">
            <span className="text-xl font-semibold pr-3 border-r-2">Tech Stack</span>
            <div className="flex flex-wrap gap-4">
                {technologies.map(data =>(    
                <img
                    src={data}
                    className="size-11 select-none"
                />
            ))}
            </div>
        </div>
        </>
    )
}
