import React, { Component } from 'react'

// 抽屉，可以一定程度上减少父子通讯，直接定义在父类上，取值可以直接取到
export default class App extends Component {

    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <Navbar>
                    <button onClick={() => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>click</button>
                </Navbar>

                {this.state.isShow && <Slider />}
            </div>
        )
    }
}

function Navbar(props) {
    return (
        <di>
            {props.children}
        </di>
    )
}

function Slider() {
    return (
        <div style={{ backgroundColor: 'yellow', height: '200px' }}>
            <ul>
                <li>11111111111111</li>
                <li>11111111111111</li>
                <li>11111111111111</li>
                <li>11111111111111</li>
                <li>11111111111111</li>
                <li>11111111111111</li>
            </ul>
        </div>
    )
}




