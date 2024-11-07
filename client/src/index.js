// Importa React para poder utilizar JSX y crear componentes de React
import React from 'react';
// Importa ReactDOM, que se utiliza para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom';
// Importa el archivo de estilos CSS globales para la aplicación
import './index.css';
// Importa el componente principal de la aplicación, App
import App from './App';
// Importa la función reportWebVitals para medir el rendimiento de la aplicación
import reportWebVitals from './reportWebVitals';

// Renderiza la aplicación React en el elemento del DOM con id 'root'
ReactDOM.render(
  // React.StrictMode es un componente que ayuda a detectar problemas en el desarrollo
  <React.StrictMode>
    {/* El componente App es el componente principal de la aplicación */}
    <App />
  </React.StrictMode>,
  // Se renderiza en el elemento del DOM con el id 'root'
  document.getElementById('root')
);

// La función reportWebVitals se utiliza para medir el rendimiento de la aplicación
// Puede enviarse a un servicio de análisis o simplemente registrar los resultados
// Para habilitar la medición de rendimiento, pasa una función como parámetro
// Ejemplo: reportWebVitals(console.log) para ver los resultados en la consola
reportWebVitals();
