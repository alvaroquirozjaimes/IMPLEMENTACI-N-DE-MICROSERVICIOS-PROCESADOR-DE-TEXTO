import { render, screen } from '@testing-library/react'; // Importa las funciones necesarias para renderizar el componente y buscar elementos en el DOM
import App from './App'; // Importa el componente App que se va a probar

test('renders learn react link', () => {
  render(<App />); // Renderiza el componente App en el entorno de pruebas
  const linkElement = screen.getByText(/learn react/i); // Busca el texto "learn react" en el DOM renderizado
  expect(linkElement).toBeInTheDocument(); // Verifica que el elemento que contiene el texto "learn react" esté presente en el DOM
});
