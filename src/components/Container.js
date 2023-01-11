

function Container ({containerValue}){
    

    if(containerValue === "home"){
        return (<h1>Halaman Home</h1>)
        
    }
    if(containerValue === "portofolio"){
        return (<h1>Halaman Portofolio</h1>)
    }
    if(containerValue === "contact"){
        return (<h1>Halaman Contact</h1>)
    }


    
    
   
}

export default Container