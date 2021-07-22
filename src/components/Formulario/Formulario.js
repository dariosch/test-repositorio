import React from "react";
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'
import {Col, Form} from "react-bootstrap";

const defaultListado = {
    id: '',
    nombre: '',
    precio: '',

};

const Formulario = ({agregarComprob}) => {

    //para hacer dinamico algo, creamos un state.
    //const [taskName, setTaskName] = useState("");
    //const [nombreArticulos, setNombres] = useState("");
    const [error, setError] = useState(false);
    //const [aPasar, setaPasar] = useState("");

    const [descripcion, setDescripcion] = useState("");
    const [task, setListado] = useState({defaultListado});
    

    const SetListado = (e) => {
        var prop = e.target.name;
        var value = e.target.value;

        setListado({
            ...task,
            [prop]: value
        });
    }

    const cargaArticulo = (e) => {
        e.preventDefault();
        console.log(e.target.elements);

        const articuloNombre = e.target.elements.nombre.value.trim();
        const articuloPrecio = e.target.elements.precio.value.trim();


      //  const [articulo,button1,precio,button2] = e.target.elements;        //obtengo los datos del form en orden. en articulo va el nombre, en precio el precio.
      //  const articuloValor = articulo.value.trim();
       // const articuloPrecio = precio.value;
        
        if(articuloNombre === ""){
            setError(true);
            return;     //corto el flujo porque tiene que ir por aca. si es vacio tiene que saltar el error
        }
        if(articuloPrecio == ""){
            setError(true);
            return;
        }
        setError(false);
       
        console.log(articuloNombre);             //aca tengo el nombre
        console.log(articuloPrecio);            //aca tengo el precio
        console.log("Submit hecho");

        //setNombres(articuloValor);              //setea nombreArticulos con el nombre del articulo actual
        agregarComprob({...task, id: nanoid()});
        
    };

   // const handleTaskName = (e) => {
        //console.log(e.target.value);
   //     setNombres(e.target.value);
   // };

    
    return(
        <Col >
            <h4>Cargar Articulos</h4>
            <form id='ingreso' onSubmit={cargaArticulo}>
                <label>Nombre de articulo </label>
                <input type="text"  name="nombre" placeholder="Nombre de artículo.." onChange={SetListado}/><br />
                <label>Precio de articulo </label>
                <input type="text" name="precio" placeholder="Precio de artículo.." onChange={SetListado}/><br />
                
                <Button as="input" type="submit" variant="outline-success" className="mt-5" name="carga" value="Cargar" />
                <Button as="input" type="reset" variant="outline-success" className="mt-5" value="Limpiar" />
                <br /><br /><br />
                <ErrorMessage visible={error} title="El articulo no puede estar vacio" />
            </form>
        </Col>
    )
};

export default Formulario;