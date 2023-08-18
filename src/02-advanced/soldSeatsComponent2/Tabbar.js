import React from 'react'

export default function Tabbar(props) {
  return (
    <div>
      <ul>

        {props.indexList.map((item, index) => {
          return (<li className={item.id === props.currentIndex ? 'active' : ''}
            key={item.id} onClick={() => props.changeIndex(item.id)}>
            {item.name}
          </li>)
        })}
      </ul>
    </div>
  )
}