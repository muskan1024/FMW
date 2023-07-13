import React from 'react'
import Image from 'next/image'

const Feed = () => {
    return (
        <div>
            <div>
                <img src='images/fmw-banner.png' alt='banner' className='w-screen' />
            </div>
            <div className='text-center text-2xl'>
                <p>Trusted Brands</p>
                <div className='flex justify-left p-2'>
                    <div><a href='/'><img className='h-12 p-2' src='images/siyarams-logo.png'/></a></div>
                    <div><a href='/'><img className='h-12 ml-2' src='images/raymond-logo.png'/></a></div>
                    <div><a href='/'><img className='h-12 ml-3' src='images/peter-england-logo.png'/></a></div>
                </div>
            </div>
            
        </div>
    )
}

export default Feed