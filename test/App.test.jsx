import React from 'react';
import ReactDOM from 'react-dom';
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
 * 1.为什么用React浏览器没有显示出内容？而原生DOM就有——> 使用ReactDom.render可以成功渲染，但是使用RTL就没办法？并且会带有很多其他代码，估计是不兼容Karma？
 * 2.jest、jest-dom、jsdom关系
 */
describe('react test', function () {
  // it('render react with RTL', function () {
  //   render(<App />);
  //   screen.debug();
  //   screen.getByText('hello world');
  // })

  it('render react with custom render', function () {
    ReactDOM.render(<App />, document.body);
    screen.debug();
  })
})
