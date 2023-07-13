import Link from 'next/link'
import React from 'react'
// import { AiOutlineHome , AiOutlineShoppingCart } from'react-icons/ai'
// import {BiPhone} from 'react-icons/bi'

const PNavbar = () => {
    return (
        <div>
            {/* <div className='flex text-4xl justify-between bg-gray-200'> */}
            {/* <div className=' h-16 flex justify-center p-1 bg-slate-900'> */}
                {/* <h1 className='text-3xl font-serif text-red-600 font-bold ml-2 mt-2 drop-shadow-2xl'>Fashion Mens Wear</h1> */}
                {/* <img src='images/logo-1.png' /> */}
            {/* </div> */}
            <nav className='flex justify-between text-2xl text-white p-1 h-20 pb-1 bg-black z-20 relative '>
                <img src='images/fmw-logo-1.png' className='pl-4 py-1' />
                <div className='flex gap-20 mx-8 my-auto'>
                {/* <Link href="/" className='hover:text-sky-700 '>Home</Link> */}
                <Link href="/Shop" className='hover:text-sky-700 '>Shop</Link>
                {/* < AiOutlineShoppingCart />< BiPhone />*/}
                <div className='hover:text-sky-700 '>Collection</div>
                <div className='hover:text-sky-700 '>New Arrivals</div>
                <menu></menu>
                </div>
            </nav>
            {/* </div> */}
        </div>
    )
}

export default PNavbar