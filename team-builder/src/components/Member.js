import React from 'react'

const Member = props => {

    
    return (
        <div>
            {props.membersList.map(member => {
                return(
                <div>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>   
                )
            })}
        </div>
    )
}

export default Member

