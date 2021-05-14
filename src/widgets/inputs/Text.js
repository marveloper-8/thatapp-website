import React from 'react'
// styles
import './style.scss'

const Text = e => {
    return <input 
        type={e.type}
        placeholder={e.placeholder}
        value={e.value}
        onChange={e.onChange}
        name={e.name}
        required={e.required}
        disabled={e.disabled}
        class={`text-input ${e.styling}`}
    />
}

export default Text