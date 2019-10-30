import React, {Component} from 'react';

import LightCard from '../components/LightCard'
import MediaCard from '../components/MediaCard'

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <LightCard/>
                    </div>
                    <div className="col-sm-12 col-lg-6 py-3">
                        <iframe 
                        width="auto" 
                        height="auto"
                        src="https://www.youtube.com/embed/5g1ijpBI6Dk" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <h2 className="mx-auto mt-5 pt-5">Tratamientos</h2>
                    <div className="row my-4">
                        <div className="col-sm12 col-lg-4">
                            <MediaCard
                            source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.yale.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffeatured_media%2Fpublic%2Fhiv-treatment.jpeg%3Fitok%3DRNyJQjnB%26c%3D07307e7d6a991172b9f808eb83b18804&f=1&nofb=1"
                            />
                        </div>
                        <div className="col-sm12 col-lg-4">
                            <MediaCard
                            source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsciworthy.com%2Fwp-content%2Fuploads%2F2018%2F03%2FHIVDRUGS.jpg&f=1&nofb=1"
                            />
                        </div>
                        <div className="col-sm12 col-lg-4">
                            <MediaCard
                            source="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs.newsweek.com%2Fsites%2Fwww.newsweek.com%2Ffiles%2F2016%2F08%2F02%2Ftruvada-pill.jpg&f=1&nofb=1"
                            />
                        </div>
                    </div>               
                </div>
            </div>
        )
    }
}

export default Landing