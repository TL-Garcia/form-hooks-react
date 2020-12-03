import React from 'react'

const TextInput = ({name, text}) => {
    return (
        <div className="Form__field">
            <label htmlFor={name}>{text}</label>
            <input type="text" name={name} id={name}/>
        </div>
    )
}

export default TextInput