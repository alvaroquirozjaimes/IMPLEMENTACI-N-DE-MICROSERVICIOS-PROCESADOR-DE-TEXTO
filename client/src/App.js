import logo from './logo.svg'; // Importa el logo de la app (no se utiliza en este fragmento)
import './App.css'; // Importa los estilos CSS de la app
import 'bootstrap/dist/css/bootstrap.css'; // Importa los estilos de Bootstrap para los componentes UI
import { Button, Tab, Tabs, Alert, Container, Row } from 'react-bootstrap'; // Importa componentes de Bootstrap
import React, { useState, useEffect } from "react"; // Importa React y hooks de estado
import axios from "axios"; // Importa la librería axios para hacer solicitudes HTTP

function App() {
  // Definición de estados locales utilizando useState
  const [lettesAndWords, setlettesAndWords] = useState({}); // Estado para almacenar el número de palabras y caracteres
  const [textLetersAndWords, settextLetersAndWords] = useState(''); // Estado para almacenar el texto ingresado
  const [reverse, setreverse] = useState({}); // Estado para almacenar el texto a revertir
  const [textReverse, settextReverse] = useState(''); // Estado para almacenar el texto revertido
  const [number, setnumber] = useState(0); // Estado para almacenar el número a convertir a texto
  const [numberInWords, setnumberInWords] = useState(''); // Estado para almacenar el número convertido a palabras
  const [errorMessage, seterrorMessage] = useState(''); // Estado para manejar los mensajes de error

  // URLs de los servicios backend para cada funcionalidad
  const counterService = "http://localhost:7020/counter";
  const revertService = "https://localhost:7011/reverttext";
  const numbertoletterService = "https://localhost:7001/numbertoletter";

  // Función para contar palabras y caracteres
  const callCounter = React.useCallback(() => {
    axios.post(counterService, { "text": textLetersAndWords })
      .then((response) => {
        seterrorMessage('') // Limpia el mensaje de error
        setlettesAndWords(response.data); // Guarda la respuesta con los datos de palabras y caracteres
      })
      .catch((error) => {
        setlettesAndWords({}); // Si hay error, limpia los datos previos
        seterrorMessage('Este servicio no esta disponible'); // Muestra un mensaje de error
        console.log(error); // Muestra el error en la consola
      });
  });

  // Función para revertir el texto ingresado
  const callReverse = React.useCallback(() => {
    axios.post(revertService, { "text": reverse })
      .then((response) => {
        seterrorMessage('') // Limpia el mensaje de error
        settextReverse(response.data); // Guarda el texto revertido en el estado
      })
      .catch((error) => {
        settextReverse(''); // Si hay error, limpia el texto revertido
        seterrorMessage('Este servicio no esta disponible'); // Muestra un mensaje de error
        console.log(error); // Muestra el error en la consola
      });
  });

  // Función para convertir el número a palabras
  const callNumberToWords = React.useCallback(() => {
    axios.get(numbertoletterService + `/${number}`)
      .then((response) => {
        seterrorMessage('') // Limpia el mensaje de error
        setnumberInWords(response.data); // Guarda el número convertido en palabras
      })
      .catch((error) => {
        setnumberInWords(''); // Si hay error, limpia el resultado
        seterrorMessage('Este servicio no esta disponible'); // Muestra un mensaje de error
        console.log(error); // Muestra el error en la consola
      });
  });

  return (
    <div>
      <div>
        <h1> Bienvenido a la app para manejo de texto </h1>
      </div>
      {/* Muestra un mensaje de error si existe */}
      {errorMessage ?
        <Alert variant="danger">
          {errorMessage}
        </Alert>
        : <span> </span>
      }
      {/* Contenedor de las pestañas de la aplicación */}
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

        {/* Pestaña para el contador de letras y palabras */}
        <Tab eventKey="counter" title="Contador de letras y palabras">
          <Container>
            <Row>
              <label>Ingresa el texto para calcular numero de caracteres y palabras</label>
            </Row>
            <Row>
              <textarea onChange={e => settextLetersAndWords(e.target.value)}></textarea>
            </Row>
            <Row>
              {lettesAndWords.words && lettesAndWords.characters ?
                <Alert>
                  <label>Palabras: {lettesAndWords.words}</label>
                  <br />
                  <label>caracteres: {lettesAndWords.characters}</label>
                </Alert>
                : <span> </span>
              }
            </Row>
            <Row>
              <Button variant="primary" onClick={callCounter}>Calcular</Button>
            </Row>
          </Container>
        </Tab>

        {/* Pestaña para revertir el texto */}
        <Tab eventKey="revert" title="Revertir texto">
          <Container>
            <Row>
              <label>Ingresa el texto para a revertir</label>
            </Row>
            <Row>
              <textarea onChange={e => setreverse(e.target.value)}></textarea>
            </Row>
            <Row>
              {textReverse ?
                <Alert>
                  {textReverse}
                </Alert>
                : <span> </span>
              }
            </Row>
            <Row>
              <Button variant="primary" onClick={callReverse}>Reversar Texto</Button>
            </Row>
          </Container>
        </Tab>

        {/* Pestaña para convertir número a palabras */}
        <Tab eventKey="numberconverter" title="Convertir numero a texto">
          <Container>
            <Row>
              <label>Ingresa el numero a convertir en texto</label>
            </Row>
            <Row>
              <input type="number" onChange={e => setnumber(e.target.value)} />
            </Row>
            <Row>
              {numberInWords ?
                <Alert>
                  {numberInWords}
                </Alert>
                : <span> </span>
              }
            </Row>
            <Row>
              <Button variant="primary" onClick={callNumberToWords}>Convertir a texto</Button>
            </Row>
          </Container>
        </Tab>

      </Tabs>
    </div>
  );
}

export default App;
