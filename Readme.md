This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## note
- 参考 https://www.jianshu.com/p/2d54c2b3cfa3
- npx create-react-app edu-web
- 引入git
- npm run eject
- npm install antd --save

## 多class的写法
1. 本页样式写在localStyle里，公共样式写在baseStyle里，没有用scss或者less的写法，公共样式可以用...引用，因为本质是对象变量
<span style={{...baseStyle.blue, ...localStyle.yellow,...{fontSize:'30px'} }}>实习就业</span>
<span style={{...baseStyle.blue, ...localStyle.yellow, fontSize:'30px', marginLeft:'100px' }}>实习就业</span>
2. className的形式，自定义样式单独写style了，本页样式可以同级目录css下，公共样式可以写styles下
<span className="yellow big" style={{marginLeft:'100px' }}>实习就业</span>

## question
1. 多class的写法，以及用className还是style，以及style组织如何更优雅
2. 诡异的router，js跳转，需要单独抽出来封装


## todo
整理目录结构
加上eslint
规范commit
配置publicPath，增加脚本可上传cdn
完成ci/cd自动化部署
