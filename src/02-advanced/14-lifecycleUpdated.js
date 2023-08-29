import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'


// 更新阶段, 设置名字，名字改变但是列表不变就不重新渲染
export default class App extends Component {

    state = {
        list: [],
        myname: 'Mozzie'
    }

    componentDidMount() {
        axios.get('/test.json')
            .then(res => {
                console.log(res.data.data.films)

                this.setState({
                    list: res.data.data.films
                })
            })
    }


    render() {
        return (
            <div>

                <div id='warrp' style={{ backgroundColor: 'yellow', height: '200px', overflow: 'hidden' }}>
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.filmId}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    componentDidUpdate(){

    }
}
