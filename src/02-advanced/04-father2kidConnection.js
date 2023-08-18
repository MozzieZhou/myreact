import React, { Component } from 'react'

export default class App extends Component {

    //   设置存储参数接受input值
    state = {
        username: 'Mozzie',
        password: ''
    }

    render() {
        return (
            <div>
                {/* 设置两个自定义Input框 */}
                <Fild value={this.state.username} labelName='用户名' type='text' changeValue={(value) => this.setState({ username: value })} />
                <Fild labelName='密码' value={this.state.password} type='password' changeValue={(value) => this.setState({ password: value })} />
                <button onClick={() => { console.log(this.state.username, '---', this.state.password) }}>登陆</button>
                <button onClick={()=> this.setState({username:'',password:''})}>重置</button>
            </div>
        )
    }
}

function Fild(props) {
    return (
        <div>
            <div>{props.labelName}</div>
            <input type={props.type} value={props.value} onChange={(event) => props.changeValue(event.target.value)} />
        </div>
    )
}
