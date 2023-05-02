import { render, screen } from '@testing-library/react';
import App from './App';
import Productos from './Componentes/Productos';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
