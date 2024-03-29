import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

{/*components = estilo da página(Letras Maiúsculas)
   pages = rotas
*/}

const Pagina = (props) => {
    return (
        <div>

            <Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo} - {props.nome}</h1>
                </Container>
            </div>

            <Container>
                {props.children}
            </Container>

            <div className='bg-secondary position-fixed bottom-0 py-3 text-white text-center' style={{ width: '100%' }}>
                <p>Todos os direitos reservados</p>
            </div>

        </div>
    )
}

export default Pagina