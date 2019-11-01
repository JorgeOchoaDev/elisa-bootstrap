import React, {Component} from 'react';

import LightCard from '../components/LightCard'
import MediaCard from '../components/MediaCard'

import ChatIcon from '../ChatIcon.svg'
import HealthIcon from '../HealthIcon.svg'
import PrivacyIcon from '../PrivacyIcon.svg'

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <LightCard
                        title="Una red de soporte"
                        content="Hicimos Elisa para que todos tengan un lugar seguro para informarse, compartir y hablar sobre VIH y SIDA en un entorno seguro y de apoyo"
                        />
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
                    <h2 className="mx-auto mt-3 pt-3">¿Porqué?</h2>
                    <div className="row my-4">
                        <div className="col-sm12 col-lg-4">
                            <MediaCard
                            title="Pregunta al chatbot"
                            content="Nuestro chatbot está entrenado para resolver todas las dudas comunes y hasta te puede agendar una cita con un especialista"
                            source={ChatIcon}
                            />
                        </div>
                        <div className="col-sm12 col-lg-4">
                            <MediaCard
                            title="Habla con un experto"
                            content="Todos los usuarios especialistas pasan por un proceso de revisión donde nos aseguramos que su cédula profesional sea válida y que están calificados para ayudarte"
                            source={HealthIcon}
                            />
                        </div>
                        <div className="col-sm12 col-lg-4">
                            <MediaCard
                            title="Comparte Tranquilo"
                            content="No te vamos a pedir tu nombre, foto, dirección o teléfono. Sólo necesitamos un email para crear tu cuenta"
                            source={PrivacyIcon}
                            />
                        </div>
                    </div>               
                </div>
            </div>
        )
    }
}

export default Landing