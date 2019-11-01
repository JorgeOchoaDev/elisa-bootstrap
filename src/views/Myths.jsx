import React, {Component} from 'react';

import HorizontalCard from '../components/HorizontalCard'

class Myths extends Component{
    render(){
        return(
            <div className="container">
                <div id="cardCollection" className="row d-flex align-items-center">
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="'Los mosquitos pueden transmitir el VIH'"
                    content="La sangre de las personas picadas por el mismo mosquito no tiene contacto y el VIH no sobrevive dentro de un mosquito."
                    source="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/mosquito_borne_illnesses_slideshow/493ss_cdc_rf_chlerotatus_triseriatus_mosquito.jpg"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="'No se puede contraer VIH por sexo oral'"
                    content="Aunque la probabilidad es muy baja, es posible contraer VIH por sexo oral."
                    source="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/living_with_HIV_slideshow/getty_rm_photo_of_blood_vessel_interior_with_hiv.jpg"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="'No me necesito proteger si mi pareja también tiene VIH'"
                    content="Hay muchas cepas de VIH que pueden generar comorbidad y hacer más complicado el tratamiento."
                    source="https://blog.draroras.com/wp-content/uploads/2011/12/Condoms.jpg"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="'Si llevo tratamiento, no soy contagioso/a'"
                    content="Cuando puede reducir la probabilidad de contagio, una infección de VIH tratada sigue siendo transmisible"
                    source="http://www.bad-drug.net/wp-content/uploads/2012/05/combivir.jpg"
                    />
                    </div>
                </div>
             </div>
        )
    }
}

export default Myths