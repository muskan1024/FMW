import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Shop() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/getProducts');
                const data = await response.json();
                if (response.ok) {
                    setProducts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);
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
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center text-xl ">
                    {Products.map((products) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black hover:shadow-lg hover:shadow-black/50 h-fit rounded-lg overflow-hidden mb-4 shad border border-gray-400 shadow-black/60  text-white"
                        >
                            <div>
                                <img 
                                    src={products.Image}
                                    alt="Product Image"
                                    className="h-56 object-cover bg-white mx-auto"
                                />
                            </div>
                            <div>
                                <h2>{products.BName}</h2>
                                <h2>{products.PName}</h2>
                                <h2>{products.Price}</h2>
                            </div>

                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    )
}