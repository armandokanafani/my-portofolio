import Home from "../pages/Home";
import Portofolio from "../pages/Portofolio";

function Container ({containerValue}){
    

    if(containerValue === "home"){
        return (
            <Home />
        )
        
    }
    if(containerValue === "portofolio"){
        return (
            <Portofolio />
        )
    }
    
    if(containerValue === "contact"){
        return (<h1>Halaman Contact</h1>)
    }


    
    
   
}

export default Container