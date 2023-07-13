import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'

function About() {
    return (
        <div>
            <Navbar />
            <div className="relative p-10 ">
                <div className="absolute inset-0">
                    <Image
                        src="/background.jpg"
                        alt="background image"
                        fill
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center p-5 bg-gray-200 text-center opacity-90 rounded-xl w-[100%]">
                    <img src='images/openingceremony.jpg' className='w-full md:w-[80%] xl:w-[70%]  rounded-xl' />
                    <h1 className='text-3xl font-bold text-red-600'>Fashion Mens Wear & Collection</h1>
                    <h1>Fashion Mens Wear, Since 2000.</h1>
                    <p className='mt-4 text-md md:text-lg font-bold '>Welcome to Fashion Men's Wear & Collection, your number one source for all types of clothing for mens from buying the fabric to getting it stitch. We're dedicated to giving you the very best of clothing, with a focus on fabrics, stiching them at a reasonable price.
                        Fashion Mens Wear a men's tailoring shop and Fashion Collection a Fabrics shop for Men's. Badshah Lala Shaikh owner of Fashion Mens Wear.We are serving peoples by stitching their clothes at a reasonable price and of any styles, kind and every type of clothes as our customers want from last 20 years. We have a huge experience in this field.We have proffesional tailor's and team working at our place.We stitch clothes for each and every age group.We stitch every types and styles of clothes as our customers want to.
                        And Now we have a New Shop named Fashion Collection. A Shop of Branded fabrics and cloth pieces for mens. We have all kinds of materials like shirting, suiting, trousers, and more. We have all type of fabrics.Branded fabrics and non-branded fabrics too. We have all type of fabrics like Linen, Rayon, Polyster, Cotton, Cotton-Blend, Printed fabrics any many more.
                        We hope that you will visit us once and you will love it.
                        We hope you enjoy our products as much as We enjoy offering them to you. If you have any questions or queries, please don't hesitate to contact us by just calling us or a just by a Message. Thank You !!</p>
                    {/* <a href='/' className='text-blue-700 underline text-lg font-bold underline hover:text-sky-600'>Click</a> */}
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default About;