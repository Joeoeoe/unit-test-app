# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# 单测配置计划
React支持——>TS支持

似乎可以直接使用React testing library？

# Karma与Jest不兼容的点
* 无法使用jest-dom的API(如toBeInTheDocument)——>解决：使用chai-dom替代，代码需要修改
* 断言需要修改(expect等)——>解决：修改即可
* 测试框架代码估计小改(describe等)——>解决：修改即可


# 不着急解决的疑问
* mocha、chai的类型应该如何配置 ✅
* 附带的script代码是什么
* 是否要把css文件等也解析打包进去？有什么意义？✅ 保证浏览器显示的正确，已注入成功
* 为什么RTL不能渲染出内容，直接使用React就可以

# 里程碑
## v1: 2021.10.10
* test runner: karma
* testing framework: mocha
* assertion library: chai
* testing plugin: sinon, sinon-chai
* UI测试库: chai-dom, @testing-library/react, @testing-library/user-event