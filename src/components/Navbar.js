import { useCallback } from "react";

const Navbar = ({onValueChange}) => {

    // const handleContainerChange = useCallback(event => {
    //     onValueChange(event.target.value)
    // },[ onValueChange])

    return (
        <div className="flex justify-between items-center bg-black px-12 md:px-24 lg:px-36 w-full py-6">
            <div className="flex justify-center">
                <a href="">
                    <h1 className='font-bold text-white'>ARKAAN'S</h1>
                </a>
            </div>
            
            <div>
                <ul className="flex justify-evenly text-white font-medium w-full gap-x-12">
                    <li className="font-medium">
                        <a id="dashboard" onClick={() => onValueChange("home")} value>Dashboard</a>
                    </li>
                    <li>
                        <a id="portofolio" onClick={() => onValueChange("portofolio")}>Portofolio</a>
                    </li>
                    <li>
                        <a id="contact" onClick={() => onValueChange("contact")}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;