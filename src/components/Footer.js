

const Footer = () =>{
    return(
        <div className="flex flex-col px-12 md:px-24 lg:px-36 md:flex-row-reverse w-full md:justify-between py-6 items-center border-t">
            
            {/* Social Media Container */}
            <div className="flex flex-col md:flex-row w-full md:w-fit md:gap-6 text-center mb-2">
                <a className="hover:font-bold" href="https://www.instagram.com/armando.kanafani/">Instagram</a>
                <a className="hover:font-bold" href="https://github.com/armandokanafani">Github</a>
            </div>
            <div>
            <p className="text-sm">@2023 - Build by Me</p>
            </div>
            
        </div>
    )
}

export default Footer