import { useEffect, useState } from "react";

export default function Animation(){
    const [animationImg, setAnimationImg] = useState('')
    useEffect(() =>{
        setAnimationImg('opacity-100 translate-y-0');
    })
    return(
        <div className="hidden w-full h-full absolute overflow-hidden flex-col items-center justify-center z-100 bg-neutral-900">
        <div className="flex items-center relative select-none ">
            <span className="font-semibold text-6xl absolute right-24 ">Ram</span>
            <div className="w-30 h-30">
                <img 
                    src="/general/Ram.webp" 
                    className={`w-full h-full object-cover opacity-0 transition-all duration-3000 ${animationImg}`} 
                />
            </div>
            <span className="font-semibold text-6xl absolute left-26.5">Code</span>
        </div>
        <span className="font-semibold text-xl text-neutral-400 translate-x-2 tracking-widest">Full-Stack Developer</span>
        </div>
    )
}