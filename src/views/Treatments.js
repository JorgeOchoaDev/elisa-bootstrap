import React, {Component} from 'react';

import HorizontalCard from '../components/HorizontalCard'

class Treatments extends Component{
    render(){
        return(
            <div className="container">
                <div id="cardCollection" className="row d-flex align-items-center">
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Treatment1"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Treatment2"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Treatment3"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Treatment4"
                    />
                    </div>
                </div>
             </div>
        )
    }
}

export default Treatments