import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { BsGeoAlt } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { FiChrome, FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'


const Footer = () => {
    return (
        <div className='bg-zinc-800 text-white'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 justify-items-stretch p-10'>
                <div className='grid grid-rows gap-3'>
                    <img src='images/symbol-logo-1.png' className='h-24' />
                    <p>Fashion That Leaves a Mark</p>
                    <div className='flex gap-3'>
                        <FiInstagram />
                        <FiFacebook />
                        <FiTwitter />
                        <FiChrome />
                    </div>
                </div>
                <div className='grid grid-rows '>
                    <p className='text-xl pb-5 text-sky-500'>Information</p>
                    <p>About Us</p>
                    <p>Awards & achievement</p>
                    <p>Contact Us</p>
                </div>
                <div className='text-center col-span-2 lg:col-span-1'>
                    <p className='text-xl pb-5 text-sky-500'>Locate Us</p>
                    <p className=''>Sai Palace, opp. Ramakrishna Mangal Karyalaya
                        Bhimashankar Colony, Shri Sant Abhang Colony,
                        Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411027</p>
                    {/* <p className=''>fashionmenswear81019@gmail.com</p> */}
                </div>
                
            </div>

        </div>
    )
}

export default Footer