import React, {useState} from 'react'

 function Form (props) {

    const [member, setMember] = useState({name: '', email: '', role: ''})
    const handleSumbit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={event => handleSumbit(event)}>
            <label htmlFor='members name'>Name:  </label>
            <input
                type='text'
                name='name'
                value='members name'
                onChange={changeHandler}
            />
            <label htmlFor='members email'>Email: </label>
            <input
                type='email'
                name='email'
                value='members email'
            />
            <label htmlFor='members role'>Role:  </label>
            <input
                type='text'
                name='role'
                value='members role'
            />
            <button>Submit!</button>
        </form>
    )
}

export default Form 