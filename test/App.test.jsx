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
  // TODO 从RTL中抽取出来的代码，为啥能渲染到浏览器中，而使用render方法则不行？？
  it('render react with RTL', function () {

    let baseElement = null;
    let container = null;
    const hydrate = false;
    const ui = <App />;


    if (!baseElement) {
      // default to document.body instead of documentElement to avoid output of potentially-large
      // head elements (such as JSS style blocks) in debug output
      baseElement = document.body
    }
    if (!container) {
      container = baseElement.appendChild(document.createElement('div'))
    }

  
    act(() => {
      if (hydrate) {
        ReactDOM.hydrate(ui, container)
      } else {
        ReactDOM.render(ui, container)
      }
    })

    const div = document.body.appendChild(document.createElement('div'));
    render(<p>123456</p>, { container: div });
    screen.debug();
    // screen.getByText('hello world');
  })

  // it('render react with custom render', function () {
  //   const div = document.createElement('div');
  //   document.body.append(div);
  //   ReactDOM.render(<App />, div);
  //   screen.debug(div);
  // })
})
