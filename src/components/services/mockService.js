import productos from "../../data/productos"


function APICall(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    })
}

export default APICall