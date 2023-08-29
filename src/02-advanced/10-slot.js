import React, { Component } from 'react'


// 插槽方式， 获取组件中的内部元素，提高复用性
export default class App extends Component {
    render() {
        return (
            <div>
                <Swiper>
                    <div>1111111111111</div>
                    <div>2222222222222</div>
                    <div>3333333333333</div>
                </Swiper>

                <Child>
                    <div>00000000000000</div>
                    <div>2222222222222</div>
                    <div>3333333333333</div>
                </Child>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.children[1]}
            </div>
        )
    }
}


class Swiper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
