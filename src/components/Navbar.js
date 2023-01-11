import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import MobileNabar from "./MobileNavbar";

const Navbar  = ({onValueChange}) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center bg-black px-12 md:px-24 lg:px-36 w-full py-6">
                <div className="flex justify-center">
                    <button  onClick={() => onValueChange("home")}>
                        <h1 className='font-bold text-white'>ARKAAN'S</h1>
                    </button>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex justify-evenly text-white font-medium w-full gap-x-12">
                        <li className="font-medium">
                            <button id="dashboard" className="hover:text-blue-800" onClick={() => onValueChange("home")}>Dashboard</button>
                        </li>
                        <li>
                            <button id="portofolio" className="hover:text-blue-800" onClick={() => onValueChange("portofolio")}>Portofolio</button>
                        </li>
                        <li>
                            <button id="contact" className="hover:text-blue-800" onClick={() => onValueChange("contact")}>Contact</button>
                        </li>
                    </ul>
                </div>

                {/* Hamburger menu */}
                <div className="lg:hidden">
                    <Hamburger  toggled={isOpen} toggle={setOpen} size={20} color="#FFFFFF"/>
                </div>
                
            </div>
            
            {/* Mobile Menu Start*/}
            <div className="lg:hidden">
                <MobileNabar onValueChange={onValueChange} onShow={isOpen}/>
            </div>
            {/* Mobile Menu End */}
        </div>
    )
}

export default Navbar;