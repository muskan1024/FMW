import Navbar from "@/components/Navbar";
import { FiSearch } from "react-icons/fi";

export default function Shop() {
    return (
        <div>
            <Navbar />
            <div className='pt-4 bg-gray-00'>
                <div className="flex justify-center text-center ">
                    <p className="flex text-center border-2 rounded-full p-1 px-2 bg-white hover:shadow">
                        <FiSearch className="text-xl pt-1" />
                        <input placeholder="Search Products..." className="enabled:outline-none bg-inherit"></input>
                    </p>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-10 justify-items-center px-auto rounded'>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded "><a href='#'><img src='images/Collections/lc-4.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/lc-8.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/lc-6.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/lc-7.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/lc-3.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/lc-5.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/c-9.png' className='h-64' />Rs.</a></div>
                    <div className="w-full flex flex-row justify-center bg-gray-100 hover:shadow-md hover:shadow-slate-400 rounded"><a href='#'><img src='images/Collections/c-10.png' className='h-64' />Rs.</a></div>
                </div>
            </div>
        </div>
    )
}