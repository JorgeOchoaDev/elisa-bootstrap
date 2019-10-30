import React from 'react'

export default function MediaCard(props){
    return(
        <div className="card my-3">
            <img src={props.source} className="card-img-top"></img>
            <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}