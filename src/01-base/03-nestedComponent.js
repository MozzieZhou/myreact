// 嵌套组件

import React, { Component } from 'react'

const Child = () => {
    return (
        <div>这是childern组建</div>
    )
}

class Navibar extends Component {
    render() {
        return (<div>Naviba
            <Child></Child>
        </div>)
    }
}

// class Swiper extends Component{
//     render(){
//         return <div>Swiper</div>
//     }
// }

function Swiper() {
    return (
        <div>Swiper</div>
    )
}

const Tarbar = () => <div>Tarbar</div>

export default class App
    extends Component {
    render() {
        return (
            <div>
                <Navibar>Navibar</Navibar>
                <Swiper>Swiper</Swiper>
                <Tarbar>Tarbar</Tarbar>
            </div>
        )
    }
}
