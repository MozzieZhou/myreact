import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log("click1", "如果处理逻辑过多， 不推荐这种写法")
                }}>add1</button>

                <button onClick={this.handleClick2}>add2</button>

                <button onClick={this.handleClick3}>add3</button>

                <button onClick={() => {
                    this.handleClick4()
                }}>add4</button>
            </div>
        )
    }

    handleClick2() {
        console.log("click2", "如果处理逻辑过多， 不推荐这种写法")
    }

    handleClick3 = () => console.log("click3", "推荐这种写法")

    handleClick4() {
        console.log("click4", "很推荐这种写法")
    }
}
