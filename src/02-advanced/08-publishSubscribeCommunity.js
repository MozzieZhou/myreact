import axios from 'axios'
import React, { Component } from 'react'
import './css/03-community.css'

// 基于发布订阅模式的父子通行

const bus = {
    // 接受订阅函数
    list: [],

    // 订阅者
    subscribe(callback) {
        this.list.push(callback)
    },

    // 发布者
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}

export default class App extends Component {

    // 构造器，请求数据，设置list
    constructor() {
        super()
        this.state = {
            "cinemaList": [],
        }

        axios.get(`/test.json`)
            .then(res => {
                console.log(res.data.data.films)
                this.setState({
                    cinemaList: res.data.data.films
                })
            })
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.cinemaList.map((item) => {
                        return <FilmItem key={item.filmId} {...item}></FilmItem>
                    })}
                </ul>
                <FilmDetail synopsis={this.state.info} />
            </div>
        )
    }
}


function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    return (
        <div className='filmItem' onClick={() => {
            bus.publish(synopsis)
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    )
}


class FilmDetail extends Component {

    constructor() {
        super()
        this.state = {
            info: ''
        }

        // 订阅消息
        bus.subscribe((value) => {
            this.setState({
                info: value
            })
        })
    }

    render() {
        return (
            <div className='filmDetail'>
                {this.state.info}
            </div>
        )
    }
}
