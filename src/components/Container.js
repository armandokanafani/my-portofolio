import Home from "../pages/Home";

function Container ({containerValue}){
    

    if(containerValue === "home"){
        return (
            <Home />
        )
        
    }
    if(containerValue === "portofolio"){
        return (<h1>Halaman Portofolio</h1>)
    }
    if(containerValue === "contact"){
        return (<h1>Halaman Contact</h1>)
    }


    
    
   
}

export default Container