import React from 'react'
import Image from 'next/image'
import App from '@/components/App'

const Feed = () => {
    return (
        <div>
            <div>
                <img src='images/fc-banner.png' alt='banner' className='w-screen' />
            </div>
            <div className='pt-4 bg-gray-200'>
                <div className='flex justify-around'>
                <p className='text-xl '>Latest Collections</p>
                <a href='Shop'><button className='bg-blue-400 text-white p-1 px-2 hover:bg-blue-600 hover:text-black rounded-full'>View All</button></a>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-3 py-10 justify-items-center px-auto'>
                    <a href='#'><img src='images/Collections/lc-4.png' className='h-64 bg-gray-300 hover:shadow-lg'/>Rs.</a>    
                    <a href='#'><img src='images/Collections/lc-8.png' className='h-64 bg-gray-300 hover:shadow-lg'/>Rs.</a>    
                    <a href='#'><img src='images/Collections/lc-6.png' className='h-64 bg-gray-300 hover:shadow-lg'/>Rs.</a>    
                    <a href='#'><img src='images/Collections/lc-7.png' className='h-64 bg-gray-300 hover:shadow-lg'/>Rs.</a>    
                </div>
            </div>
            <App />
            <div className='text-center text-2xl p-3 flex flex-col gap-4'>
                <p>Trusted Brands</p>
                <div className='grid grid-cols-6 justify-left gap-2 '>
                    <div><a href='/'><img className='h-6 md:h-10 ' src='images/siyarams-logo.png'/></a></div>
                    <div><a href='/'><img className='h-8 md:h-12' src='images/raymond-logo.png'/></a></div>
                    <div><a href='/'><img className='h-8 md:h-12' src='images/peter-england-logo.png'/></a></div>
                </div>
            </div>
            
        </div>
    )
}

export default Feed