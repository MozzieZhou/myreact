import React, { Component } from 'react'


export default class App extends Component {

    username = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页</h1>

                <input type='text' ref={this.username} defaultValue="请输入用户名" />

                {/* 登陆按钮 */}
                <button onClick={() => {
                    return console.log(this.username.current.value)
                }}>
                    登陆
                </button>

                <button onClick={() => this.username.current.value = ''}>
                    重置
                </button>

                {/* ref操作为异步操作，所以无法传递值，子组件无法读取 */}
                {/* <Child username={this.username.current ? this.username.current.value : ''}></Child> */}
            </div>
        )
    }
}


function Child(props){
    return <div>Username:{props.username}</div>
}
