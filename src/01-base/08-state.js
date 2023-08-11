import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: "收藏",
        like: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState(
                        { like: !this.state.like }
                    )
                    if (this.state.like) {
                        console.log('收藏逻辑')
                    } else {
                        console.log('取消收藏逻辑')
                    }
                }}>
                    {this.state.like ? '收藏' : "取消收藏"}
                </button>
            </div>
        )
    }
}
