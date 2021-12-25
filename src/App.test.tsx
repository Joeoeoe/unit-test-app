import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const btnElement = screen.getByText(/click me/i);
//   expect(btnElement).toBeInTheDocument();
// });

// test('browser API in jsdom', () => {
//   render(<App />);
//   const btnElement = screen.getByText(/click me/i);
//   userEvent.click(btnElement);
// });

test('mock browser API in jsdom', () => {
  render(<App />);

  // mock getBoundingClientRect函数
  const getBoundingClientRectSpy = jest.fn(() => ({ top: 80 } as DOMRect));
  window.HTMLElement.prototype.getBoundingClientRect = getBoundingClientRectSpy;

  const btnElement = screen.getByText(/click me/i);
  userEvent.click(btnElement);
});