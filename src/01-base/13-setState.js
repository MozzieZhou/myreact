import React, { Component } from 'react'

export default class App extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={() => {
                    this.handleAdd()
                }}>ADD1</button>
                <button onClick={() => {
                    this.handleAdd1()
                }}>ADD2</button>
                <button onClick={() => {
                    this.handleAdd2()
                }}>ADD2</button>
            </div>
        )
    }

    handleAdd = () => {
        console.log(++this.state.count)
    }

    handleAdd1() {
        setTimeout(() => {
            this.setState({
                count: ++this.state.count
            })

            this.setState({
                count: ++this.state.count
            })

            this.setState({
                count: ++this.state.count
            })
        }, 0)

    }

    handleAdd2() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
            // 状态 和真实dom已经更新完了，
        })
    }


}
