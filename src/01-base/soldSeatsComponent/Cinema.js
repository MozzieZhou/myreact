import React, { Component } from 'react'
import axios from 'axios'


export default class Cinema extends Component {

    // 构造器中进行发送请求
    constructor() {

        super()

        // 定义接收参数接收cinemaList
        this.state = {
            "cinemaList": [],
            "backupCinemaList": []
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
                backupCinemaList: res.data.data.cinemas
            })
        })
    }

    render() {
        return (
            <div>
                {/* 模糊搜索框 */}
                <input onInput={this.handleSearch} />
                {
                    this.state.cinemaList.map((item, index) =>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    handleSearch = (event) => {
        console.log(event.target.value)

        // 获取到list信息
        const filterCinema = this.state.backupCinemaList.filter((item) => item.name.includes(event.target.value))

        this.setState({
            cinemaList : filterCinema
        })

    }

}
