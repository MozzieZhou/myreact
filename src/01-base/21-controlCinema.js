import React, { Component } from 'react'
import axios from 'axios'


// 两步操作
// 1. onchange事件监听对应修改的值
// 2. 用setState获取最新的cinemaList，但是原cinemaList不改变

export default class Cinema extends Component {

    // 构造器中进行发送请求
    constructor() {

        super()

        // 定义接收参数接收cinemaList
        this.state = {
            "cinemaList": [],
            'myText': ''
        }

        axios({
            url: "https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=2952974",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16916618081057090235793409","bc":"310100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data.cinemas)
            this.setState({
                cinemaList: res.data.data.cinemas,
            })
        })
    }

    render() {
        return (
            <div>
                {/* 模糊搜索框 */}
                <input onChange={(event) => {
                    this.setState({
                        myText: event.target.value
                    })
                }} />
                {
                    this.filterCinema().map((item, index) =>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    filterCinema = () => {
        return this.state.cinemaList.filter((item) =>
            item.name.toUpperCase().includes(this.state.myText.toUpperCase()) || item.address.toUpperCase().includes(this.state.myText.toUpperCase()))
    }

    handleSearch = (event) => {
        console.log(event.target.value)

        // 获取到list信息
        const filterCinema = this.state.backupCinemaList.filter((item) => item.name.includes(event.target.value))

        this.setState({
            cinemaList: filterCinema
        })

    }

}
