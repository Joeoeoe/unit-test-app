import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';
import { act } from 'react-dom/test-utils';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


//   
/**
 * // TODO
 * 1.为什么RTL不能渲染出内容，直接使用React就可以
 * 2.附带的script代码是什么
 * 3.是否要把css文件等也解析打包进去？有什么意义？优点：可以看见自动化测试过程；缺点：测试速度会变慢，会变慢多少？
 */
describe('react test', function () {
  it('render react with RTL', function () {
    render(<App />);
    screen.debug();
    screen.getByText('hello world');
  })

  // it('render react with custom render', function () {
  //   const div = document.createElement('div');
  //   document.body.append(div);
  //   ReactDOM.render(<App />, div);
  //   screen.debug(div);
  // })
})
