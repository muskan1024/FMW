import React from 'react'
import Image from 'next/image'

const Feed = () => {
    return (
        <div>
            <div>
                <img src='images/fmw-banner.png' alt='banner' className='w-screen' />
            </div>
            
            <div className='text-center text-2xl'>
                <p>Top Products:</p>
                <div className='border flex justify-evenly'>
                    <div><a href='/'><img className='h-64 ' src='images/cp1.jpg'/>Siyarams</a></div>
                    <div><a href='/'><img className='h-64  ' src='images/cp.2.jpg'/>products</a></div>
                    <div><a href='/'><img className='h-64 ' src='images/cp.3.jpg'/>products</a></div>
                </div>
            </div>
            <div className='text-center text-2xl'>
                <p>Trusted Brands</p>
                <div className='flex justify-left p-2'>
                    <div><a href='/'><img className='h-12 p-2' src='images/siyarams-logo.png'/></a></div>
                    <div><a href='/'><img className='h-12 ml-2' src='images/raymond-logo.png'/></a></div>
                    <div><a href='/'><img className='h-12 ml-3' src='images/peter-england-logo.png'/></a></div>
                </div>
            </div>
            <div className="relative p-5 pl-40 pr-40 ">
                <div className="absolute inset-0">
                    <Image
                        src="/background.jpg"
                        alt="background image"
                        fill
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center p-5 bg-gray-200 text-center opacity-90 rounded-xl ">
                    <img src='images/openingceremony.jpg' className='w-[45%] h-62 rounded-xl' />
                    <h1 className='text-3xl font-bold text-red-600'>Fashion Mens Wear & Collection</h1>
                    <h1>Fashion Mens Wear, Since 2000.</h1>
                    <p className='mt-4 text-sm font-bold '>Welcome to Fashion Men's Wear & Collection, your number one source for all types clothing for mens from buying the fabric to getting it stitch. We're dedicated to giving you the very best of clothing, with a focus on fabrics, stiching them at a reasonable price. We hope that you will visit us once and you will love it.
                        We hope you enjoy our products as much as We enjoy offering them to you. If you have any questions or queries, please don't hesitate to contact us by just calling us or a just by a Message. Thank You !!
                        To Know More About Us</p>
                    <a href='/' className='text-blue-700 underline text-lg font-bold underline hover:text-sky-600'>Click</a>
                </div>
            </div>
        </div>
    )
}

export default Feed