import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('react test', function () {
  it('render react', function () {
    render(<App />);
    screen.debug();
  })
})
