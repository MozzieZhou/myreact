import React, { Component } from 'react'

// 基于scu进行demo设计，有个一input框以及一个列表，input框中输入值，对应的列表值变灰，输入同样的，不变
export default class App extends Component {

    // 设置展示list以及当前current
    state = {
        list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
        current: 0
    }


    render() {
        return (
            <div>
                <input type='number' onChange={(evet) => {
                    this.setState({
                        current: evet.target.value
                    })
                }} value={this.state.current} />

                <div style={{ overflow: 'hidden' }}>
                    {
                        this.state.list.map((item, index) =>
                            // 00 0 0
                            // 01 1 1
                            <Box key={item} current={this.state.current} item={item} index={index} />
                        )
                    }
                </div>
            </div>
        )
    }
}

class Box extends Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.index == this.props.current || nextProps.current == nextProps.index) {
            return true
        }
        return false
    }


    render() {
        return (
            <div style={{ margin: '10px', float: 'left', width: '200px', height: '200px', border: this.props.current == this.props.index ? '1px solid red' : '1px solid gray' }}>
                {this.props.item}
            </div>
        )
    }
}
