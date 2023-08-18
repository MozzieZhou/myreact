import React, { Component } from 'react'
import './css/02-soldSeats.css'
import Film from './soldSeatsComponent2/Film'
import Cinema from './soldSeatsComponent2/Cinema'
import Center from './soldSeatsComponent2/Center'
import Tabbar from './soldSeatsComponent2/Tabbar'
import Navbar from './soldSeatsComponent2/Navbar'

export default class App extends Component {

    // 设置内部state进行判断切换
    state = {
        current: 0,
        list: [
            { id: 0, name: '电影' },
            { id: 1, name: '影院' },
            { id: 2, name: '我的' }
        ]
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
                <Navbar changeIndex={(index) => this.setState({ current: index })} />
                {this.which()}
                <Tabbar indexList={this.state.list} currentIndex={this.state.current} changeIndex={(index) => this.setState({ current: index })} />
            </div>
        )
    }
}
