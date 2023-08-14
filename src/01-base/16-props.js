import React, { Component } from 'react'
import Navbar from './navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <div>
            <h1>首页</h1>
            <Navbar title="首页" leftShow={false}/>
        </div>

        <div>
            <h1>列表</h1>
            <Navbar></Navbar>
        </div>

        <div>
            <h1>购物车</h1>
            <Navbar></Navbar>
        </div>
      </div>
    )
  }
}
