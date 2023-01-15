import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import MobileNabar from "./MobileNavbar";

const Navbar  = ({onValueChange}) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <nav className="flex flex-col">
            <div className="flex justify-between items-center bg-white border-b drop-shadow-md px-12 md:px-24 lg:px-36 w-full py-6">
                <div className="flex justify-center">
                    <button  onClick={() => onValueChange("home")}>
                        <h1 className='font-bold text-base text-black'>Armando Kanafani</h1>
                    </button>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex justify-evenly text-black font-medium w-full gap-x-12">
                        <li className="font-medium">
                            <button id="home" className="hover:text-opacity-50" onClick={() => onValueChange("home")}>Home</button>
                        </li>
                        <li>
                            <button id="portofolio" className="hover:text-opacity-50" onClick={() => onValueChange("portofolio")}>Portofolio</button>
                        </li>
                        <li>
                            <button id="contact" className="hover:text-opacity-50" onClick={() => onValueChange("contact")}>Contact</button>
                        </li>
                    </ul>
                </div>

                {/* Hamburger menu */}
                <div className="lg:hidden">
                    <Hamburger  toggled={isOpen} toggle={setOpen} size={20} color="#000000"/>
                </div>
                
            </div>
            
            {/* Mobile Menu Start*/}
            <div className="lg:hidden">
                <MobileNabar onValueChange={onValueChange} onShow={isOpen}/>
            </div>
            {/* Mobile Menu End */}
        </nav>
    )
}

export default Navbar;