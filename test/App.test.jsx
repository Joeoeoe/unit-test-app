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
    /**
     * 为什么chai-dom这里是这样? 
     * 原因：expect返回Assertion对象，to是为了方便可读性所做的chain，其值仍然是Assertion对象
     * 最后读取exist值，chai-dom在这里用overwriteProperty做了一层封装判断DOM是否存在。
     * overwriteProperty底层用了Object.defineProperty设置属性的getter，getter调用了chai-dom
     * 重写的方法，故能进行判断
     * 
     * 另外，chai原本定义exist的时候就是使用了addProperty，为其设置了getter，而不是使用addMethod把它作为方法，
     * 所以chai-dom就依照他的规则是用了overwriteProperty。
     * 
     * 至于为什么chai使用exist，目前尚不清楚
     * 
     * chai文档对于exist的说明：
     * Asserts that the target is not strictly (===) equal to either null or undefined.
     * However, it’s often best to assert that the target is equal to its expected value.
     */
    expect(btnElement).to.exist;
  })
})
