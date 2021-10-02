import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


//   
/**
 * // TODO
 * 1.karma config解决
 * 2.为什么用React浏览器没有显示出内容？而原生DOM就有
 * 3.jest、jest-dom、jsdom关系
 */
describe('react test', function () {
  it('render react', function () {
    render(<App />);
    screen.debug();
    screen.getByText('hello world');
  })
})
