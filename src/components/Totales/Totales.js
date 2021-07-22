import React from "react";
import {useState} from "react";

const Totales = ({tasks}) => {
    
   // const [total, setTotal] = useState(0);
 
//    const suma10 = () =>{
//        setTotal(total+10);
//    }

 //   const vuelvea0 = () =>{
 //       setTotal(0);
 //   }

    let precioTotal = tasks.reduce((acumulador, item)=>{
        return acumulador + parseFloat(item.precio);
    },0);

    return (
        <>


            <h3>Total: $ {precioTotal} </h3>
            
            
        </>
    );
}

export default Totales;