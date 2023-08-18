import React, { Component } from 'react'


// Navbar有两个按钮，一个是返回，一个是跳转首页按钮
export default function Navbar(props) {
  return (
    <div style={{ backgroundColor: 'yellow', textAlign: 'center', overflow: "hidden" }}>

      <button style={{ float: 'left' }}>back</button>

      <span>卖座电影</span>

      <button style={{ float: 'right' }} onClick={() => props.changeIndex(2)}>center</button>

    </div>)
}
