import React from 'react'

export default function LightCard(props){
    return(
        <div className="card my-3">
            <div className="card-body">
                <h2>{props.title}</h2>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
}