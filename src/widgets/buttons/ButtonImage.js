import React from 'react'
// styles
import './style.scss'

const Button = e => {
    return <button type={e.type} class={`${e.styling} button-image-container`}>
        <div class="button-container">{e.text}</div>
        <div class="button-container"><img src={e.img} alt="img" /></div>
    </button>
}

export default Button
