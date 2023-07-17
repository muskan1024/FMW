import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval= 3000, }) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() =>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    },[] )

    return (
        <div className="overflow-hidden relative">
            {/* <p className=" font-bold text-3xl text-sky-900 p-2">Categories</p> */}
            <div className="flex  transition-transform ease-out duration-500" style={{transform: `translateX(-${curr *100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4 ">
                <button onClick={prev} className="rounded-full shadow text-gray-800 hover:bg-white">
                    <BiChevronLeft size={40} />
                </button>
                <button onClick={next} className=" rounded-full shadow text-gray-800 hover:bg-white">
                    <BiChevronRight size={40} />
                </button>
            </div>
        </div>
    )
}