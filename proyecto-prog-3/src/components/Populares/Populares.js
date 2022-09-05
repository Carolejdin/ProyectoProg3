import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Populares extends Component{
    constructor(props){
        super(props)
        this.state={
  
        }
    }
   
    render(){
        return(
            <React.Fragment>
         
           <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPeli.poster_path}` } alt='img' />
           <p>{this.props.datosPeli.original_title}</p>
           <p>{this.props.datosPeli.overview}</p>
            <Link to="/detalle">Detalle popular</Link>
         
           </ React.Fragment>


        )
    }

}

export default Populares