import React from 'react'

export default function HorizontalCard(props){
    return(
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.source} className="card-img"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}