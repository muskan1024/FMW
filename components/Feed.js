import React from 'react'
import Image from 'next/image'

const Feed = () => {
    return (
        <div>
            <div>
                <img src='images/fc-banner.png' alt='banner' className='w-screen' />
            </div>
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