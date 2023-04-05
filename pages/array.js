import React from 'react';
import Cabecalho from '../components/Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const Array = () => {

    const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo', 'Monza'];
    const Array = 'Array'
    let endereco = 'ABC';

    return (
        <>
            <Pagina titulo="Arrays" nome="Orion">
                <Container>
                    <h1>Lista Ordenada</h1>
                    <ol>
                    {carros.map(item => (
                        <li>{item}</li>
                    ))}
                    </ol>
                </Container>
            </Pagina>
        </>
    )
}
export default Array