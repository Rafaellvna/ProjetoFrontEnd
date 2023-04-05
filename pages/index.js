import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Cabecalho from "../components/Cabecalho";
import { Container } from "react-bootstrap";
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina titulo="Página Inicial" nome="Orion">
        <Container>
          <h1>Hello World</h1>
          <p>Parágrafo 1</p>
          <p>Parágrafo 2</p>
          <p>Parágrafo 3</p>
        </Container>
      </Pagina>
    </>
  )
}
