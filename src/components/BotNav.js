import React from 'react'

import {Link} from 'react-router-dom'


export default function BotNav(){
    return(
            <nav class="nav nav-pills nav-fill fixed-bottom">
                <a class="nav-item nav-link active">
                    <Link to="/tratamientos">
                        Tratamientos
                    </Link>
                </a>
                <a class="nav-item nav-link">
                    <Link to="/mitos">  
                        Mitos
                    </Link>
                </a>
                <a class="nav-item nav-link">
                    <Link to="/cuidados">
                        Cuidados
                    </Link>
                </a>
            </nav>
    )
}