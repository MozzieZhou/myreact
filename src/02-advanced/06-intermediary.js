import axios from 'axios'
import React, { Component } from 'react'
import './css/03-community.css'

// 中间人模式
export default class App extends Component {

    // 构造器，请求数据，设置list
    constructor() {
        super()
        this.state = {
            "cinemaList": [],
            info:''
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
                        return <FilmItem key={item.filmId} {...item} changeInfoState={(value)=> { this.setState({info:value})}}></FilmItem>
                    })}
                </ul>
                <FilmDetail synopsis={this.state.info}/>
            </div>
        )
    }
}


function FilmItem(props) {
    let {name, poster,grade,synopsis} = props
    return (
        <div className='filmItem' onClick={()=>{
            props.changeInfoState(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    )
}

function FilmDetail(props){
    return (
        <div className='filmDetail'>
          {props.synopsis}
        </div>
    )
}