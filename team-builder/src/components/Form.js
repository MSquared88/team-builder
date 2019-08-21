import React, {useState} from 'react'

 function Form (props) {

    const [member, setMember] = useState({name: '', email: '', role: ''})
    
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value})
    }
    console.log(member)
    const handleSumbit = (event) => {
        event.preventDefault()
        const newMember = {
            ...member,
            id: Date.now
        }
        console.log(newMember)
        props.addNewMember(newMember);
        // setMember({name: '', email: '', role: ''})
    }

    return (
        <form onSubmit={event => handleSumbit(event)}>
            <label htmlFor='members name'>Name:  </label>
            <input
                type='text'
                name='name'
                placeholder='Enter name here.'
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor='members email'>Email: </label>
            <input
                type='email'
                name='email'
                placeholder='Enter email here.'
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor='members role'>Role:  </label>
            <input
                type='text'
                name='role'
                placeholder='Enter your yole here.'
                value={member.role}
                onChange={changeHandler}
            />
            <button>Submit!</button>
        </form>
    )
}

export default Form 