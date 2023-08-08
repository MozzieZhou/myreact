import React, { Component } from 'react'

export default class App extends Component {

    // 通过ref接收存储数据
    myRef = React.createRef()
    render() {
        return (
            <div>
                <input ref={this.myRef}/>
                <button onClick={() => {
                    console.log('handle click', this.myRef.current.value)
                }}>
                    add
                </button>
            </div>
        )
    }
    handleClick() {
        console.log('handle clock', this.a)
    }
}
