import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Animation({ active }: { active: boolean }){
    const imgAnimate = useRef<HTMLImageElement>(null);
    const ramAnimate = useRef<HTMLSpanElement>(null);
    const codeAnimate = useRef<HTMLSpanElement>(null);

    useEffect(() =>{
        if (!active) return;

        const time = setTimeout(()=>{
             gsap.fromTo(
                imgAnimate.current,
                { opacity: 0, y: -70 },
                { opacity: 1, y: 0, duration: 1}
            );
        }, 500)
        
        const interval = setTimeout(()=>{
            gsap.fromTo(
                ramAnimate.current,
                {opacity: 0, x: -80},
                {opacity: 1, x: 0, duration: 1}
            )
            
            gsap.fromTo(
                codeAnimate.current,
                {opacity: 0, x: 80},
                {opacity: 1, x: 0, duration: 1}
            )
            }, 1600)

        return () =>  {
            clearTimeout(interval);
            clearTimeout(time);
        }
        
        
    }, [active])

    if (!active) return null;

    return(
        <div className="fixed w-full h-full overflow-hidden flex-col items-center justify-center z-100 bg-neutral-900 cursor-none">
            <div className="flex justify-center w-full h-full items-center relative select-none ">
                <span ref={ramAnimate} className={`font-semibold text-6xl absolute left-[37.5%] 2xl:left-[40%] opacity-0`}>Ram</span>
                <div className="w-30 h-30">
                    <img
                        ref={imgAnimate} 
                        src="/general/Ram.webp" 
                        className={`w-full h-full object-cover opacity-0`} 
                    />
                </div>
                <span ref={codeAnimate} className={`font-semibold text-6xl absolute right-[35.5%] 2xl:right-[38.5%] opacity-0`}>Code</span>
            </div>
        </div>
    )
}