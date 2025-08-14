function TitleSections({title}){
    return(
        <>
        <div className="flex justify-center items-center w-full h-auto my-8 ">
            <div className="flex justify-center w-[90%] bg-black/40 backdrop-blur-2xl p-2 rounded-lg border-1 border-[#035f78]">
                <span className="font-bold text-3xl text-[#035f78]">
                    {title}
                </span>
            </div>
        </div>
        </>
    )
}

export default TitleSections;