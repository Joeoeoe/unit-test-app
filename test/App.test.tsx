import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../src/App';
import userEvent from '@testing-library/user-event';

describe('react test', function () {
  it('browser API in jsdom', () => {
    render(<App />);

    const btnElement = screen.getByText(/click me/i);
    /**
     * 点击后在jsdom环境中返回：{ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }
     * 在真实浏览器环境中应该是：{"x":108,"y":88,"width":64.140625,"height":21,"top":88,"right":172.140625,"bottom":109,"left":108}
     * 
     * 目前CSS样式也已经成功注入
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
