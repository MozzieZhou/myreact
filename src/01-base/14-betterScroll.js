import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        list: []
    }

    render() {
        return (
            <div>

                <div className="wrapper" style={{ height: '200px', backgroundColor: 'yellow', overflow: 'hidden' }}>
                    <ul className="content">
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>

                <button onClick={() => {
                    this.handleClick()
                }}>
                    ADD
                </button>


            </div>
        )
    }

    handleClick() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15]
        this.setState({
            list: array
        }, () => {
            new BetterScroll(".wrapper")
        })
    }

}
