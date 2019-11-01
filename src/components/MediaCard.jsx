import React from 'react'

export default function MediaCard(props){
    return(
        <div className="card my-1">
            <img src={props.source} className="card-img-top"></img>
            <div className="card-body">
                    <h3>{props.title}</h3>
                    <p className="card-text">{props.content}</p>
            </div>
        </div>
    )
}