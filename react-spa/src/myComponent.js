import React from 'react';

const Sample = ({ kids, deleteKid }) => {
    const kidsList = kids.map(kid => {
        return (
            <div className="my-app" key={kid.id} >
                <p>{kid.id} : My name is { kid.name }, I'm { kid.age } years old and I'm from { kid.city } </p>
                <button onClick={() => {deleteKid(kid.id)}}>Delete</button>
                <hr />
            </div>
        )
    })
    return (
        <div className="kids-list">
            { kidsList }
        </div>
    )
}
 

export default Sample;
