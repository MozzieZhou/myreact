import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}

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

bus.subscribe((text)=>{
    console.log("111111111",text)
})

bus.publish('Spring')