import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { BsGeoAlt } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { FiChrome, FiFacebook, FiInstagram, FiMail, FiMapPin, FiTwitter } from 'react-icons/fi'


const Footer = () => {
    return (
        <div className='bg-zinc-800 text-white'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 justify-items-stretch p-10'>
                <div className='grid grid-rows gap-3'>
                    <img src='images/symbol-fc-logo.png' className='h-24' />
                    <p>Fashion That Leaves a Mark</p>
                    <div className='flex gap-3'>
                        <a href='' className='hover:text-blue-500'><FaWhatsapp /></a>
                        <a href='' className='hover:text-blue-500'><FiInstagram /></a>
                        <a href='' className='hover:text-blue-500'><FiFacebook /></a>
                        <a href='mailto:fashionmenswear81019@gmail.com' className='hover:text-blue-500'><FiMail /></a>
                        <a href='/' className='hover:text-blue-500'><FiChrome /></a>
                    </div>
                </div>
                <div className='grid grid-rows '>
                    <p className='text-xl pb-5 text-sky-500'>Information</p>
                    <p><a href='About' className='hover:text-gray-400'>About Us</a></p>
                    <p><a href='Awards' className='hover:text-gray-400'>Awards & achievement</a></p>
                    {/* <a href=''><p>Contact Us</p></a> */}
                </div>
                <div className='text-center col-span-2 lg:col-span-1'>
                    <p className='text-xl pb-5 text-sky-500'>Locate Us</p>
                    <p className='flex hover:text-gray-400'><FiMapPin className='text-xl'/><a target='blank' href='https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu'>Sai Palace, opp. Ramakrishna Mangal Karyalaya 
                        Pimple Gurav, Pune-411061</a></p>
                    {/* <p className=''>fashionmenswear81019@gmail.com</p> */}
                </div>
                
            </div>

        </div>
    )
}

export default Footer