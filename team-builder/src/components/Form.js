import React, {useState} from 'react'

 function Form (props) {

    const [member, setMember] = useState({name: '', email: '', role: ''})
    
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    
    //this is the function that will handle the onSubmit event from our form
    const handleSumbit = (event) => {
        
        //this prevents the page from refreshing when the submit button is clicked
        event.preventDefault()
        
        //?????
        const newMember = {
            ...member,
            id: Date.now
        }

        //this adds the info that is in our member state to the memberList from app.js 
        props.addNewMember(newMember);

        //this is just to reset the member state back to default
        setMember({name: '', email: '', role: ''})
    }

    return (
        <form onSubmit={event => handleSumbit(event)}>
            <label htmlFor='name:'>Name:  </label>
            <input
                type='text'
                name='name'
                placeholder='Enter name here.'

                //this sets the value of state to whatever is in our input field so that when we input info our state can handle that info
                value={member.name}


                onChange={changeHandler}
            />
            <label htmlFor='email'>Email: </label>
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
                placeholder='Enter your role here.'
                value={member.role}
                onChange={changeHandler}
            />
            <button>Submit!</button>
        </form>
    )
}

export default Form 