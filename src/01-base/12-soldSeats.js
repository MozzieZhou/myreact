import React, { Component } from 'react'
import './css/02-soldSeats.css'
import Film from './soldSeatsComponent/Film'
import Cinema from './soldSeatsComponent/Cinema'
import Center from './soldSeatsComponent/Center'

export default class App extends Component {
    // 定义三个Tab栏
    state = {
        'list': [
            { 'id': 1, 'text': '电影' },
            { 'id': 2, 'text': '影院' },
            { 'id': 3, 'text': '我的' }
        ],
        'current': 0
    }

    render() {
        return (
            <div>
                {/* 显示组件信息 */}
                {/* {this.which()} */}
                {this.state.current === 0 && <Film></Film>}
                {this.state.current === 1 && <Cinema></Cinema>}
                {this.state.current === 2 && <Center></Center>}



                {/* 定义底边栏 */}
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={this.state.current === index ? 'active' : ''} onClick={() => {
                                this.handlClickBottomButton(index)
                            }}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handlClickBottomButton(index) {
        this.setState({
            current: index
        })
    }

    which(){
        switch(this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                alert('当前暂不可用～请稍等再试')
        }
    }

}
