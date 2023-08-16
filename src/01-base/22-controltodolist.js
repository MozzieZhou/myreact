import React, { Component } from 'react'
import './css/01-index.css'


// ref模式替换成状态

export default class App extends Component {

    // 定义存数列表
    state = {
        // 定义接收输入参数input
        mytext: '',
        list: [
            { 'id': 1, 'mytext': 'aaaaaaa', 'isChecked': false },
            { 'id': 2, 'mytext': 'bbbbbbb', 'isChecked': true },
            { 'id': 3, 'mytext': 'ccccccc', 'isChecked': false }
        ]
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.mytext} onChange={(event) => {
                    this.setState({
                        mytext: event.target.value
                    })
                }} />

                <button onClick={() => {
                    this.handleAddClick()
                }}>新增</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} >

                                <input type='checkbox' checked={item.isChecked} onChange={() => {
                                    this.handleChecked(index)
                                }} />

                                {/* 判断设置下划线 */}
                                <span dangerouslySetInnerHTML={{
                                    __html: item.mytext
                                }} style={{ textDecoration: item.isChecked ? 'line-through' : '' }}>
                                </span>
                                <button onClick={() => {
                                    this.handleDelClick(item)
                                }}>删除</button>
                            </li>
                        )
                    }
                </ul>

                {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}
                {this.which()}

                {/* <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无收藏内容</div> */}

            </div>
        )
    }

    which() {
        switch (this.state.list.length) {
            case 0:
                return <div>暂无待办事项</div>
            default:
                return <div></div>
        }
    }

    handleChecked(index) {
        const newArr = [...this.state.list]
        newArr[index].isChecked = !this.state.list[index].isChecked
        this.setState({
            list: newArr
        })
        console.log(index, newArr[index].isChecked)
    }

    handleAddClick() {
        console.log(this.state.mytext)
        if (this.state.mytext == '') {
            alert('请不要输入空内容')
            return
        }

        let newlist = this.state.list.concat()
        newlist.push({
            'id': Math.random() * 10000000,
            'mytext': this.state.mytext
        })
        this.setState({
            list: newlist,
            mytext: ''
        })
    }

    handleDelClick(itemvalue) {
        console.log(itemvalue)
        const updatedList = this.state.list.filter((item) => item.id !== itemvalue.id);
        this.setState({ list: updatedList });
    }

}
