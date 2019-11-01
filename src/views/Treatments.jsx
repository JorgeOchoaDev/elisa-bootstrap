import React, {Component} from 'react';

import HorizontalCard from '../components/HorizontalCard'

class Treatments extends Component{
    render(){
        return(
            <div className="container">
                <div id="cardCollection" className="row d-flex align-items-center">
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Inhibidores de fusión"
                    content="Bloquean la penetración del virus en la célula diana inhibiendo la unión al correceptor CCR5 o CXCR4 de la superficie celular."
                    source="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/HIV_entry_into_T_cell_schematic.png/800px-HIV_entry_into_T_cell_schematic.png"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="ITIAN"
                    content="Impiden la replicación vírica mediante la inhibición de la síntesis del DNA complementario. Estos fármacos son reconocidos por el enzima como nucleósidos normales, de modo serán fosforilados e incorporados al DNA complementario."
                    source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDOxPTdSFD3M%2Fmaxresdefault.jpg&f=1&nofb=1"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="ITINAN"
                    content="Inhiben la acción del enzima por otros mecanismos, evitando también la reproducción del virus."
                    source="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fproteopedia.org%2Fwiki%2Fimages%2Fthumb%2Fa%2Faa%2F1hmv1.png%2F200px-1hmv1.png&f=1&nofb=1"
                    />
                    </div>
                    <div className="col-12 col-lg-6">
                    <HorizontalCard
                    title="Inhibidores de proteasa"
                    content="Bloquean la producción de viriones activos. Inhibidores competitivos de las proteasas que utilizan los virus para la ruptura de polipéptidos, dando lugar por lo tanto a viriones alterados que no son infecciosos, evitando de esta forma la multiplicación del virus."
                    source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F9a%2FHIV_protease_1KJF.png&f=1&nofb=1"
                    />
                    </div>
                </div>
             </div>
        )
    }
}

export default Treatments