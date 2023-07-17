import Carousel from "@/components/Carousel";

const slides =[
    "images/Collections/sld-1.png",
    "images/Collections/sld-6.png",
    "images/Collections/sld-7.png",
    "images/Collections/sld-3.png",
    "images/Collections/sld-5.png",
    "images/Collections/sld-2.png",
]

export default function App() {
    return(
        <main className="App">
            
            <div className="w-[90%] lg:w-[60%] mx-auto py-16">
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((s)=>(
                        <img src={s} className="w-[100%]"/>
                    ))}
                </Carousel>
            </div>
        </main>
    )
}