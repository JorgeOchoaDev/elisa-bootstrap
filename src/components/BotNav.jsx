import React, {Component} from 'react'

import PropTypes from "prop-types";
import {Link, withRouter} from 'react-router-dom'


class BotNav extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };    
    render(){
        return(
                <nav class="nav nav-pills nav-fill fixed-bottom">
                    <a class={`nav-item nav-link ${this.props.location.pathname === '/tratamientos' ? 'active' : ''}`}>
                        <Link to="/tratamientos">
                            Tratamientos
                        </Link>
                    </a>
                    <a class={`nav-item nav-link ${this.props.location.pathname === '/mitos' ? 'active' : ''}`}>
                        <Link to="/mitos">  
                            Mitos
                        </Link>
                    </a>
                    <a class={`nav-item nav-link ${this.props.location.pathname === '/cuidados' ? 'active' : ''}`}>
                        <Link to="/cuidados">
                            Cuidados
                        </Link>
                    </a>
                </nav>
        )
    }
}

export default withRouter(BotNav)