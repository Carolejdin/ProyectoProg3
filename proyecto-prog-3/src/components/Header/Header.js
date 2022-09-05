import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Formulario from "../Formulario/Formulario"

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <React.Fragment>
            <img src="img/logo.webp"></img>
             <article >
                 <Link to="/" exact="true">Home</Link>
                 <Link to="/favoritos">Favoritos</Link>
                 <Link to="/populares">Peliculas Populares</Link>
                 <Link to="/estrenos">Estrenos</Link>   
            </article>
            </React.Fragment>
            

        )
    }

}

export default Header