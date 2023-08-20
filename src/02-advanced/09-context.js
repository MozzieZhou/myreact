import axios from 'axios'
import React, { Component } from 'react'
import './css/03-community.css'

const GobalContext = React.createContext()

// 中间人模式
export default class App extends Component {

    // 构造器，请求数据，设置list
    constructor() {
        super()
        this.state = {
            "cinemaList": [],
            info: ''
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
            <GobalContext.Provider value={{
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    <ul>
                        {this.state.cinemaList.map((item) => {
                            return <FilmItem key={item.filmId} {...item} />
                        })}
                    </ul>
                    <FilmDetail synopsis={this.state.info} />
                </div>
            </GobalContext.Provider>
        )
    }
}


function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    return (
        <GobalContext.Consumer>
            {
                (value) => {
                    return (<div className='filmItem' onClick={() => {
                        value.changeInfo(synopsis)
                    }}>
                        <img src={poster} alt={name} />
                        <h4>{name}</h4>
                        <div>观众评分：{grade}</div>
                    </div>)

                }
            }
        </GobalContext.Consumer>
    )
}

function FilmDetail(props) {
    return (
        <GobalContext.Consumer>
            {
                (value) => {
                    return (<div className='filmDetail'>
                        {value.info}
                    </div>)
                }
            }
        </GobalContext.Consumer>
    )
}