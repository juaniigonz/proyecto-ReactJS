import { createContext, useState } from "react";

const cartContext = createContext([])

const Provider = cartContext.Provider


function CartContextProvider(props){
    const [cart, setCart] = useState([])

    function addToCart(item, count){
        let indexItemInCart = cart.findIndex(indexItemInCart => indexItemInCart.id === item.id)
        let itemInCart = indexItemInCart !== -1
        const newCart = cart.map(item => item)
        
        
        if(itemInCart){
            newCart[indexItemInCart].count+=count
            setCart(newCart)
        }
        else{
            newCart.push({...item, count: count})
            setCart(newCart)
        }
    }

let totalItemsInCart = 0
        cart.forEach(item => totalItemsInCart += item.count)
    
function deleteCart(){
    setCart([])
}

function deleteItemCart(id){
    const newCart = cart.filter((item)=>{ 
        return item.id !== id
    })
    setCart(newCart)
}

    
    return(
        <Provider value = { {
            cart,
            addToCart,
            totalItemsInCart,
            deleteCart,
            deleteItemCart
        }}>
            {props.children}
        </Provider>
    )
}

export {cartContext, CartContextProvider}