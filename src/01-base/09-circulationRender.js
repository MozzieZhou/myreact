import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [
            { 'id': 1, 'value': 'message1' },
            { 'id': 2, 'value': 'message2' },
            { 'id': 3, 'value': 'message3' }
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(
                            (item, index) => {
                                return <li key={item.id}>{item.value}--{index}</li>
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}
