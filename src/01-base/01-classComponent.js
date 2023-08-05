import React, { Component } from 'react'

/**
 * 类组建
 */
export default class App extends Component {
    render() {
        return (
            <section>
                <div className='app' id='appRoot'>
                    <h1 className='title'>欢迎来到React世界</h1>
                    <p>
                        react.js 是一个构建UI的库
                    </p>
                    <p>
                        一个return中只能返回一个最外层的
                    </p>
                </div>
            </section>
        )
    }
}
