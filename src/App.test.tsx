import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Generate password/i);
  expect(linkElement).toBeInTheDocument();
});
