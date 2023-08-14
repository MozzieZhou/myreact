import React, { Component } from 'react'
import Sidebar from './sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar bg="red" position="rigth"/>
      </div>
    )
  }
}
