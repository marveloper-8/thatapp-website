import React from 'react'
// styles
import './style.scss'

const Button = e => {
    return <button type={e.type} class={e.styling}>{e.text}</button>
}

export default Button
