import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { BsGeoAlt } from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'


const Footer = () => {
    return (
        <div>
            <div className='flex justify-center text-xl bg-slate-200 border-t border-blue-400'>
                <a href='/' className='m-3 font-bold hover:text-sky-600 '>Home</a>
                <a className='m-3 font-bold hover:text-sky-600 '>Shop</a>
                <a className='m-3 font-bold hover:text-sky-600 '>About Us</a>
            </div>
            <div className='text-xl px-20 py-8 text-center bg-slate-200 flex justify-between'>
                <div>
                    <div className='flex justify-center'>
                        < BiPhoneCall className='text-2xl'/><p>Mobile No:</p>
                    </div>
                    <a className='text-blue-700 hover:text-sky-600 underline' href="tel:+918855023555">+918855023555 |</a>
                    <a className='text-blue-700 hover:text-sky-600 underline' href="tel:+918857831831">+918857831831 |</a>
                    <a className='text-blue-700 hover:text-sky-600 underline' href="tel:+919881987778">+919881987778</a>
                    <p>Message Us:</p>
                    <p className='flex justify-center'><FaWhatsapp className='text-2xl'/>Whatsapp No: <a className='text-blue-700 hover:text-sky-600 underline'
                        href="https://api.whatsapp.com/send?phone=+918857831831">+918857831831</a>
                    </p>
                    <p className='flex justify-center'><FaEnvelope className='text-2xl'/>Email Id:- <a className='text-blue-700 hover:text-sky-600 underline'
                        href="mailto:fashionmenswear@gmail.com">fashionmenswear81019@gmail.com</a>
                    </p>
                </div>
                <div>
                    <p>Address:</p>
                    <p className='flex justify-center'>
                        <BsGeoAlt className='text-2xl'/><a href="https://maps.google.com/?cid=14975684072325451735&entry=gps" className='text-blue-700 hover:text-sky-500 underline'>Fashion Mens Wear, Pimple Gurav-27</a>
                    </p>
                    <p>Sai Palace, opp. Ramakrishna Mangal Karyalaya</p>
                    <p> Bhimashankar Colony, Shri Sant Abhang Colony,</p>
                    <p>Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411027 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer