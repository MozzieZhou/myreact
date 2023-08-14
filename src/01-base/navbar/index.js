import React, { Component } from 'react'
import kerwinPropTypes from 'prop-types' 

export default class Navbar extends Component {

    static propTypes={
        leftShow:kerwinPropTypes.bool
    }

    // 设置默认属性
    static defaultProps ={
        leftShow:true
    }


  render() {

    let {title,leftShow} = this.props

    return (
      <div>

        {leftShow && <button>返回</button>}
        Navbar
        <button>Home</button>

      </div>
    )
  }
}
