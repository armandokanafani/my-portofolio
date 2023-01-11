const MobileNavbar = (props) => {
    if(props.onShow){
        return (
            
            <div className="opacity-75">
                <ul className="flex flex-col justify-center bg-black text-white font-medium text-center w-full gap-x-12">
                    <li className="font-medium">
                        <button id="dashboard" className="hover:bg-red-600 py-2 px-6 mt-2 rounded" onClick={() => props.onValueChange("home")}>Dashboard</button>
                    </li>
                    <li>
                        <button id="portofolio" className="hover:bg-red-600 py-2 px-6 mt-2 rounded" onClick={() => props.onValueChange("portofolio")}>Portofolio</button>
                    </li>
                    <li>
                        <button id="contact" className="hover:bg-red-600 py-2 px-6 mb-2 rounded" onClick={() => props.onValueChange("contact")}>Contact</button>
                    </li>
                </ul>
            </div>
        )
    }
    
}

export default MobileNavbar