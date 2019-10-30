import React, {Component} from 'react';

import HorizontalCard from '../components/HorizontalCard'

class Care extends Component{
    render(){
        return(
            <div className="container">
                <div id="cardCollection" className="row d-flex align-items-center">
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Care1"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Care2"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Care3"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Care4"
                    />
                    </div>
                </div>
             </div>
        )
    }
}

export default Care