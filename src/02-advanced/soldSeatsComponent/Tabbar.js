import React, { Component } from 'react'

export default class Tabbar extends Component {


  state = {
    list: [
      { id: 0, name: '电影' },
      { id: 1, name: '影院' },
      { id: 2, name: '我的' }
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => {
            return (<li className={this.props.tabbarIndex === item.id ? 'active' : ''}
              key={item.id} onClick={() => this.clickTabbarChangeIndex(item.id)} >{item.name}</li>)
          })}
        </ul>
      </div>
    )
  }

  // 点击变更信息
  clickTabbarChangeIndex = (index) => {
    console.log('切换当前索引内容',index)
    this.props.onClick(index)
  }
}
