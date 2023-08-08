import React from "react";
import ReactDOM  from 'react-dom'
import App from "./01-base/09-circulationRender"


// react 自动加工DOM
// ReactDOM.render(
//     React.createElement("h2",{className:'aaaa'},"欢迎来到React世界"),
//     document.getElementById('root'))


// ReactDOM.render(<h1>1111111111111</h1>,document.getElementById('root'))

ReactDOM.render(<App/>, document.getElementById('root'))