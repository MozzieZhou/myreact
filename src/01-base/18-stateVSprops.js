import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (<div>
            Child-{this.props.title}
            {/* 无法赋值给对应的父组件传入的对象
            Cannot assign to read only property 'title' of object ' */}
            {/* <button onClick={() =>
                this.props.title = '2222222222222'
            }>
                CHANGE2
            </button> */}
        </div>
        )
    }
}

export default class App extends Component {
    state={
        title:"11111111111111"
    }
    render() {
        return (
            <div>
                <Child  title={this.state.title}/>
                <button onClick={() =>
                   this.setState({
                    title:'22222222222222'
                   })
                }>
                    CHANGE1
                </button>
            </div>
        )
    }
}
