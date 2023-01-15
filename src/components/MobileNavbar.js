const MobileNavbar = (props) => {
    if(props.onShow){
        return (
            
            <div className="opacity-75">
                <ul className="flex flex-col justify-center bg-black text-white font-medium text-center w-full gap-x-12">
                    <li className="font-medium">
                        <button id="home" className="hover:bg-white hover:text-black py-2 px-6 mt-2 rounded" onClick={() => props.onValueChange("home")}>Home</button>
                    </li>
                    <li>
                        <button id="portofolio" className="hover:bg-white hover:text-black py-2 px-6 mt-2 rounded" onClick={() => props.onValueChange("portofolio")}>Portofolio</button>
                    </li>
                </ul>
            </div>
        )
    }
    
}

export default MobileNavbar