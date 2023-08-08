import React, { Component } from 'react'

export default class App extends Component {

    // 定义接收输入参数input
    mytext = React.createRef()

    // 定义存数列表
    state = {
        list: [
            { 'id': 1, 'mytext': 'aaaaaaa' },
            { 'id': 2, 'mytext': 'bbbbbbb' },
            { 'id': 3, 'mytext': 'ccccccc' }
        ]
    }

    render() {
        return (
            <div>
                <input ref={this.mytext} />

                <button onClick={() => {
                    this.handleAddClick()
                }}>新增</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {item.mytext}
                                <button onClick={() => {
                                    this.handleDelClick(item)
                                }}>删除</button>
                            </li>
                        )
                    }
                </ul>

            </div>
        )
    }

    handleAddClick() {
        console.log(this.mytext.current.value)
        if(this.mytext.current.value == ''){
            alert('请不要输入空内容')
            return
        }

        let newlist = this.state.list.concat()
        newlist.push({
            'id': Math.random() * 10000000,
            'mytext': this.mytext.current.value
        })
        this.setState({
            list: newlist
        })

        this.mytext.current.value = ''
    }

    handleDelClick(itemvalue) {
        console.log(itemvalue)
        const updatedList = this.state.list.filter((item) => item.id !== itemvalue.id);
        this.setState({ list: updatedList });
    }

}
