import React from "react";
import { Col, Table} from "react-bootstrap/";


const Listado = ({ tasks }) => {
        
    return (
        <>
            <Col className="table-data">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Valor</th>

                        </tr>
                    </thead>

                    <tbody>
                        {tasks?.length > 0 &&
                            tasks.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.precio}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Col>
        </>
    );
};

export default Listado;