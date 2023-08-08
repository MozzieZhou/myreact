import React, { Component } from 'react'

export default class App extends Component {
    a = 1
    
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log("click1", "如果处理逻辑过多， 不推荐这种写法", this.a)
                }}>add1</button>

                <button onClick={this.handleClick2.bind(this)}>add2</button>

                <button onClick={this.handleClick3}>add3</button>

                <button onClick={() => {
                    this.handleClick4()
                }}>add4</button>
            </div>
        )
    }

    handleClick2() {
        console.log("click2", "如果处理逻辑过多， 不推荐这种写法", this.a)
    }

    handleClick3 = () => console.log("click3", "推荐这种写法", this.a)

    handleClick4() {
        console.log("click4", "很推荐这种写法", this.a)
    }
}
