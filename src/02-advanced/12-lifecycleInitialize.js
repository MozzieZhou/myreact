import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: 'Mozzie'
    }


    UNSAFE_componentWillMount() {
        console.log("componentWillMount", document.getElementById('myname'))
        this.setState({
            myname: 'MozzieUpdated'
        })
        // 初始化数据使用
    }

    render() {
        return (
            <div>
                <span id='myname'>{this.state.myname}</span>
            </div>
        )
    }

    componentDidMount() {
        console.log("componentDidMount", document.getElementById('myname'))
        // 可以用户数据请求axios
        // 订阅函数调用
        // 基于创建的完的dom进行 初始化，，，，，，BetterScroll
    }
}
