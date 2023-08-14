import React from 'react'

export default function Sidebar(props) {

    let { bg, position } = props
    const left = {
        left: 0
    }

    const rigth = {
        rigth: 0
    }
    const baseStyle = {
        width: "200px",
        background: bg,
        position: "fixed"
    }

    console.log( position === 'left')

    const style = position === 'left' ? { ...baseStyle, ...left } : { ...baseStyle, ...rigth }

    console.log( style)

    return (
        <div style={style}>
            <ul>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
            </ul>
        </div>
    )
}
