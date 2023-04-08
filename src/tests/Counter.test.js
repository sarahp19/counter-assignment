// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const currentCount = screen.getByTestId('count');
  expect(currentCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const currentCount = screen.getByTestId('count');
  const incrementButton = screen.getByRole('button', { name: '+' });
  userEvent.click(incrementButton);
  expect(currentCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const currentCount = screen.getByTestId('count');
  const decrementButton = screen.getByRole('button', { name: '-' });
  userEvent.click(decrementButton);
  expect(currentCount).toHaveTextContent('-1');
});
