import { Star } from "lucide-react"

export default function Footer(){
    return(
        <>
        <footer className="py-4 flex flex-col text-neutral-700 text-center">
            <span>© 2025 Aram Musse's portfolio</span>
            <div className="flex items-center gap-1">
                <span className="">Simple is better than complex</span>
                <Star size={16} />
            </div>
        </footer>
        </>
    )
}

