import productos from "../../data/productos"


function APICall(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 1000)
    })
}

export function getItem(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let itemFound = productos.find(
                (arrayItem) =>arrayItem.id === id
            )
            if (itemFound)
            resolve(itemFound)
            else reject ("Item no encontrado")
        }, 1000)
    })
}

export function getCategoria(categoriaID){
 return new Promise((resolve, reject)=>{
 let itemFound = productos.filter(item=>{
    return item.categoria === categoriaID
 })
 resolve(itemFound)
 })
}



export default APICall
