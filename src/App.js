import './App.css';
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Totales from "./components/Totales";
import Filtrador from "./components/Filtrador";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";




const listado = [
  { nombre: "fideos" , precio: 90},
  { nombre: "arroz" , precio: 70},
  { nombre: "salsa" , precio: 50},
  { nombre: "pan" , precio: 40},
];

const handleListado = (e) =>{
  console.log("Entro aca");
}


const App = () => {

  const [tasks, addTask] = useState([]);

  const estadoCompartido = {
    registrar: (componente, estado, lector, escritor) => {
        if (!estadoCompartido.hasOwnProperty(componente)) {
            estadoCompartido[componente] = {};
        }
        estadoCompartido[componente][estado] = [lector, escritor];
    },
    getEstado: (componente, estado) => {
        if (!estadoCompartido.hasOwnProperty(componente)) {
            return null;
        } else {
            return estadoCompartido[componente][estado];
        }
    }
}

  const onGastoSubmit = (e) => {
    const form = e.target;
    const gasto = {
        //categoria: form.elements["categoria"].value,
        descripcion: form.elements["descripcion"].value,
        importe: form.elements["importe"].value * 1
    }
    console.log("gasto");
    const [gastos, setGastos] = estadoCompartido.getEstado('listaGastos', 'gastos');
    const [total, setTotal] = estadoCompartido.getEstado('totalizador', 'total');
    setGastos([...gastos, gasto]);
    setTotal(total + gasto.importe);
}

  const agregarComprob = (task) => {
    addTask([...tasks, task]);
  }


  return (
    <Container>
      <h2 className ="tituloPrincipal">Lista de compras</h2>
      <hr className ="colorSeparador"></hr>
      <Row>
        <Col>
          <Formulario agregarComprob={agregarComprob}  />
        </Col>
        <Col>
          <Listado tasks={tasks} />
          <Totales tasks={tasks}/>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
