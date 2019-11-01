import React, {Component} from 'react';

import HorizontalCard from '../components/HorizontalCard'

class Care extends Component{
    render(){
        return(
            <div className="container">
                <div id="cardCollection" className="row d-flex align-items-center">
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Infección aguda"
                    content="La carga viral de VIH tiende a ser muy elevada durante los primeros seis meses posteriores a la infección y es benéfico iniciar la terapia antirretroviral en esta fase."
                    source="http://2.bp.blogspot.com/_n8CKTO3MuQg/S1K5dzS2RZI/AAAAAAAAAiM/PqWRPTbxe7E/s400/060104_hiv_virus_02.jpg"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Niños"
                    content="El VIH es especialmente dañino para los infantes, con un estudio que revela que el 52% de los niños infectados al nacer no llegan a vivir más de 2 años sin tratamiento."
                    source="https://www.borgenmagazine.com/wp-content/uploads/2017/12/15360987425_98eb9b2e5d_k-1024x768.jpg"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Mujeres embarazadas"
                    content="Los objetivos en el tratamiento de las mujeres embarazadas se alcanzan de la misma manera que con un adulto en otras condiciones y también ayudan a la no transmisión del infante al nacer."
                    source="http://cdn.24.co.za/files/Cms/General/d/2800/79b29dcb1ffb48119610952408e20341.jpg"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Adultos mayores"
                    content="Con las mejoras tecnológicas en la terapia de VIH, se ha logrado que los adultos logren tener una esperanza de vida similar a la de los no infectados, esto ha generado casos de interés especial a la investigación de los efectos en adultos mayores."
                    source="https://www.medindia.net/health-images/hiv-patients.jpg"
                    />
                    </div>
                </div>
             </div>
        )
    }
}

export default Care