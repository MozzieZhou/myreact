import { render } from '@testing-library/react'
import React, { Component } from 'react'

function Navbar(props) {
    return (

        <div style={{ backgroundColor: "red" }}>
            <button onClick={() => {
                console.log("子通知父， 让父的isSHow 取反。", props.showControl)
                props.showControl()
            }}>
                click
            </button>
            Navbar
        </div>
    )
}


function Sidebar() {
    return (
        <div style={{ height: "200px", backgroundColor: "yellow" }}>
            <ul>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
            </ul>
        </div>
    )
}


export default class App extends Component {

    state = {
        isShow: true
    }


    render() {
        return (
            <div>
                <Navbar showControl={this.changeIsShowState} />
                {this.state.isShow && <Sidebar />}

            </div>
        )
    }

    changeIsShowState = () => {
        console.log(this.state.isShow)
        this.setState({
            isShow: !this.state.isShow
        })
    }

}
