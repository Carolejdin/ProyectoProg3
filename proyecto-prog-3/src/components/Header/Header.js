import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
             <article >
                 <h1>PELIS</h1>
                 <Link to="/" exact="true">Home</Link>
                 <Link to="/favoritos">Favoritos</Link>
                 <Link to="/populares">Peliculas Populares</Link>
                 <Link to="/cartel">Peliculas en cartel</Link>
            </article>

        )
    }

}

export default Header