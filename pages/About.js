import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa';
import { FiChrome, FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

function About() {
    return (
        <div className='font-serif'>
            <Navbar />
            <div className='text-center px-10 py-10'>
                <h1 className='text-4xl text-center border-b-2 pb-2 '>Contact Us</h1>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-2'>
                    <div>
                        <p className='text-lg font-semibold'>Shop</p>
                        <a><p className='flex justify-center text-center '><FiMapPin className='text-3xl' />Sai Palace, opp. Ramakrishna Mangal Karyalaya
                            Pimple Gurav, Pune-411061</p></a>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Phone</p>
                        <a href="tel:+918857831831"><p className='flex justify-center text-center hover:text-sky-600 font-sans '><FiPhone className='text-2xl' />+918857831831</p></a>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='text-lg font-semibold'>Email</p>
                        <a href='mailto:fashionmenswear81019@gmail.com'><p className='flex justify-center text-center hover:text-sky-600'><FiMail className='text-2xl' />fashionmenswear81019@gmail.com</p></a>
                    </div>
                </div>
                <div className='w-[100%] md:w-[70%] h-82 mx-auto hover:contrast-75'>
                    <a target='blank' href='https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu'><img src='images/Map.png' /></a>
                </div>
                <p className='font-semibold py-4 text-left ml-6'>Other Ways to Contact Us :</p>
                <div className='ml-12 pt-4 grid grid-row gap-4 text-left text-lg '>

                    <div className='w-fit'>
                        <p className='text-lg font-semibold'>Call / Message</p>
                        <a href="tel:+918855023555"><p className='flex text-center hover:text-sky-600 font-sans '><FiPhone className='text-2xl' />+918855023555</p></a>
                        <p className='flex hover:text-green-600 font-sans'><FaWhatsapp className='text-2xl'/><a href="https://api.whatsapp.com/send?phone=+918857831831">+918857831831</a></p>
                    </div>
                    <div>
                        <p className='text-left text-lg font-semibold'>Social Media</p>
                        <div className='flex gap-3'>
                            <a href='' className='hover:text-blue-500'><FaWhatsapp /></a>
                            <a href='' className='hover:text-blue-500'><FiInstagram /></a>
                            <a href='' className='hover:text-blue-500'><FiFacebook /></a>
                            <a href='mailto:fashionmenswear81019@gmail.com' className='hover:text-blue-500'><FiMail /></a>
                            <a href='/' className='hover:text-blue-500'><FiChrome /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative p-5 mx-6">
                <p className='text-4xl text-center border-b-2 pb-2 mb-2'>About Us</p>
                {/* <div className="absolute inset-0">
                    <Image
                        src="/background.jpg"
                        alt="background image"
                        fill
                    />
                </div> */}
                <div className="relative z-10 flex flex-col items-center justify-center p-5 bg-gray-100 text-center opacity-90 rounded-xl w-[100%]">
                    <img src='images/openingceremony.jpg' className='w-full md:w-[80%] xl:w-[70%]  rounded-xl' />
                    <h1 className='text-3xl font-bold text-red-600'>Fashion Collection & Mens Wear</h1>
                    <h1>Fashion Mens Wear, Since 1992.</h1>
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