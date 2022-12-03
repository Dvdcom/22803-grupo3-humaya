import React, { useState, useContext, useEffect } from "react";

const usarCarrito = React.createContext();
const asignarCarrito = React.createContext();


export function useUsarCarrito(){
    return useContext(usarCarrito);
}

export function useAsignarCarrito(){
    return useContext(asignarCarrito);
}

export function UserProvider(props) {

    const [carrito,setCarrito] = useState([]);

    useEffect(() => {
        carrito.forEach(element => {
            console.log('carrito contiene : ' + element);
        });;
    }, [carrito])

    const addCarrito = (e) => {
        const producto = e.target.id;
        setCarrito([...carrito,producto]);
        
    }

return (
    <asignarCarrito.Provider value={addCarrito}>
        <usarCarrito.Provider value={carrito}>
                {props.children}
        </usarCarrito.Provider>
    </asignarCarrito.Provider>
)

}