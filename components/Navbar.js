import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
    const [open, setOpen] = useState(false)
    return(
        <header className="shadow-xl py-2 bg-black">
            <div className="flex items-center justify-between xl:max-w-7xl mx-auto max-w-full  px-8 flex-wrap w-full">
                <a href="/" ><img src="images/fc-logo-main.png" width={220} height={55}  /></a>

                <FiMenu className="lg:hidden block h-6 w-6 text-white cursor-pointer"onClick={() => setOpen(!open)} />

                <nav className={`${open ? "block" : "hidden"} w-full py-3 lg:flex lg:items-center lg:w-auto `} >
                    <ul className="text-base text-white flex justify-evenly">
                        <li>
                            <a href="/" className="lg:px-5 py-2 hover:text-blue-400 font-semibold">Home</a>
                        </li>
                        <li>
                            <a href="#" className="lg:px-5 py-2 hover:text-blue-400 font-semibold">Shop</a>
                        </li>
                        <li>
                            <a href="#" className="lg:px-5 py-2 hover:text-blue-400 font-semibold">Contact</a>
                        </li>
                        <li>
                            <a href="About" className="lg:px-5 py-2 hover:text-blue-400 font-semibold">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;