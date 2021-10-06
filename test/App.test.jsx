import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render } from '@testing-library/react';
import App from '../src/App.jsx';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

const mountedContainers = new Set()
// 从RTL中抽取出来的render
function renderCustom(
  ui,
  {
    container,
    baseElement = container,
    queries,
    hydrate = false,
    wrapper: WrapperComponent,
  } = {},
) {
  if (!baseElement) {
    // default to document.body instead of documentElement to avoid output of potentially-large
    // head elements (such as JSS style blocks) in debug output
    baseElement = document.body
  }
  if (!container) {
    container = baseElement.appendChild(document.createElement('div'))
  }

  // we'll add it to the mounted containers regardless of whether it's actually
  // added to document.body so the cleanup method works regardless of whether
  // they're passing us a custom container or not.
  mountedContainers.add(container)

  const wrapUiIfNeeded = innerElement =>
    WrapperComponent
      ? React.createElement(WrapperComponent, null, innerElement)
      : innerElement

  act(() => {
    if (hydrate) {
      ReactDOM.hydrate(wrapUiIfNeeded(ui), container)
    } else {
      ReactDOM.render(wrapUiIfNeeded(ui), container)
    }
  })
}

//   
/**
 * // TODO
 * 1.为什么RTL不能渲染出内容，直接使用React就可以
 * 2.附带的script代码是什么
 * 3.是否要把css文件等也解析打包进去？有什么意义？优点：可以看见自动化测试过程；缺点：测试速度会变慢，会变慢多少？
 */
describe('react test', function () {
  // TODO 从RTL中抽取出来的代码，为啥能渲染到浏览器中，而使用render方法则不行？？
  // it('render react with RTL', function () {
  //   renderCustom(<p>123456</p>);
  //   render(<App />);
  //   screen.debug();
  //   // screen.getByText('hello world');
  // })

  // it('render react with custom render', function () {
  //   const div = document.createElement('div');
  //   document.body.append(div);
  //   ReactDOM.render(<App />, div);
  //   screen.debug(div);
  // })

  it('browser API in jsdom', () => {
    render(<App />);
    // const div = document.createElement('div');
    // document.body.append(div);
    // ReactDOM.render(<App />, div);

    const btnElement = screen.getByText(/click me/i);
    /**
     * 点击后在jsdom环境中返回：{ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }
     * 在真实浏览器环境中应该是：{"x":8,"y":88,"width":64.140625,"height":21,"top":88,"right":72.140625,"bottom":109,"left":8}
     * karma中成功返回正确位置(注意排除CSS干扰，后续看情况是否要在karma环境中注入css文件)
     */
    userEvent.click(btnElement);

    // toBeInTheDocument是jest-dom的API，与jest集成，故在chai中无法使用
    // expect(btnElement).toBeInTheDocument();
  })
})
