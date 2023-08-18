import React, { Component } from 'react'
import './css/02-soldSeats.css'
import Film from './soldSeatsComponent/Film'
import Cinema from './soldSeatsComponent/Cinema'
import Center from './soldSeatsComponent/Center'
import Tabbar from './soldSeatsComponent/Tabbar'
import Navbar from './soldSeatsComponent/Navbar'

export default class App extends Component {

    // 设置内部state进行判断切换
    state = {
        current: 1
    }

    which() {
        switch (this.state.current) {
            case 0:
                return <Film />
            case 1:
                return <Cinema />
            case 2:
                return <Center />
            default:
                return null
        }
    }


    render() {
        return (
            <div>
                <Navbar onClick={(index) => this.handlChangeCurrent(index)} />
                {this.which()}
                <Tabbar tabbarIndex={this.state.current} onClick={(index) => this.handlChangeCurrent(index)} />
            </div>
        )
    }

    handlChangeCurrent = (index) => {
        this.setState({
            current: index
        })
    }


}
