import React, { Component } from 'react'


// 本节学习SCU进行优化代码(shouldComponentUpdate)
export default class App extends Component {

    state = {
        myname: 'Mozzie'
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: 'xiaoming'
                    })
                }}>
                    click
                </button>

                {this.state.myname}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log(nextProps,nextState)

        // 设置先决条件，来判断本次update是否执行
        // if(nextState.myname === this.state.myname){
        //     return false
        // }

        if(JSON.stringify(nextState) === JSON.stringify(this.state)){
            return false
        }

        return true
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate')
    }
}
