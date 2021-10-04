import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const btnElement = screen.getByText(/click me/i);
//   expect(btnElement).toBeInTheDocument();
// });

test('browser API in jsdom', () => {
  render(<App />);
  const btnElement = screen.getByText(/click me/i);
  /**
   * 点击后在jsdom环境中返回：{ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }
   * 在真实浏览器环境中应该是：{"x":863.921875,"y":80,"width":64.140625,"height":21,"top":80,"right":928.0625,"bottom":101,"left":863.921875}
   * 如此导致某些库（如popper.js）在使用数据计算时会返回NAN（如0/0）
   */
  userEvent.click(btnElement);
});