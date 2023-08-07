import React, { Component } from 'react'
import './css/01-index.css'

export default class App
    extends Component {
    render() {
        var obj = {
            backgroundColor: "yellow",
            fontSize: "30px"
        }

        var myname = 'mozzie'

        return (
            <div>
                {10 + 20}-{myname}

                {10 + 20 > 50 ? "大于" : "小于"}

                <p>使用css样式，直接定义样式
                    <div className='active'>1111111111111111111</div></p>

                <p>使用id进行定义样式
                    <div id='myapp'>2222222222222222222</div></p>

                <p>直接定义样式
                    <div style={{ backgroundColor: "red" }}>1111111111111111</div></p>

                <div style={obj}>333333333333333</div>

                <label htmlFor='username'>用户名</label>
                <input type='text' id='username'></input>
            </div>
        )
    }
}
