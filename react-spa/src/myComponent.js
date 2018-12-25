import React, { Component } from 'react';

class Sample extends Component {
    render() {
        const { kids } = this.props;
        const kidsList = kids.map(kid => {
            return (
                <div className="my-app" key={kid.id} >
                    <p>{kid.id} : My name is { kid.name }, I'm { kid.age } years old and I'm from { kid.city } </p>
                </div>
            )
        })
        return (
            <div className="kids-list">
                { kidsList }
            </div>
        )
        
    }
}

export default Sample;