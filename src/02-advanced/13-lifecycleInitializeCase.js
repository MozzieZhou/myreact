import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

// BetterScroll案例
export default class App extends Component {

    state = {
        list: ["111", "222", "333", "444", "555", "666", "777", "888", "999", "000", "121", "123", "124", "125"]
    }

    componentDidMount(){
        new BetterScroll("#warrp")
    }

    render() {
        return (
            <div id='warrp' style={{height:'200px',backgroundColor:'yellow',overflow:'hidden'}}>
                <ul>
                    {this.state.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div>
        )
    }
}
