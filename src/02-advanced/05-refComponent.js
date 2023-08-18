import React, { Component } from 'react'

export default class App extends Component {

    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>

                <Field labelName='用户名' type='text' ref={this.username} />
                <Field labelName='密码' type='password' ref={this.password} />
                <button onClick={()=>{
                    console.log(this.username.current.state.value)
                    console.log(this.password.current.state.value)
                }}>登陆</button>
                <button onClick={()=>{
                    this.username.current.clear()
                    this.password.current.clear()
                }}>重置</button>
            </div>
        )
    }
}

class Field extends Component {

    state = {
        value: ''
    }

    clear() {
        this.setState({
            value: ''
        })
    }

    setValue(receiveValue) {
        this.setState({
            value: receiveValue
        })
    }

    render() {
        return (
            <div>
                <div>{this.props.labelName}</div>
                <input type={this.props.type} value={this.state.value} onChange={(event) => this.setValue(event.target.value)} />
            </div>
        )
    }
}
