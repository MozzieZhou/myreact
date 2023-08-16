import { render } from '@testing-library/react'
import React, { Component } from 'react'

// 受控组件核心思想，就是把内容放到当前类的状态中
export default class App extends Component {

    state = {
        username: 'Mozzie'
    }


    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input value={this.state.username} onChange={(event) => {
                    console.log(event.target.value)
                    this.setState({
                        username: event.target.value
                    })
                }} />

                <button onClick={() => {
                    console.log(this.state.username)
                }}>
                    登陆
                </button>

                <button onClick={() => {
                    this.setState({
                        username: ''
                    })
                }}>
                    重置
                </button>

                <Child username={this.state.username} />
            </div>
        )
    }
}

function Child(props) {
    return <div>Username:{props.username}</div>
}