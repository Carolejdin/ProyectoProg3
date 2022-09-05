import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Estrenos extends Component{
    constructor(props){
        super(props)
        this.state={
  
        }
    }
   
    render(){
        return(
            <React.Fragment>
            
           <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosEstreno.poster_path}`} alt='img'/>
           <p>{this.props.datosEstreno.original_title}</p>
           <p>{this.props.datosEstreno.overview}</p>
            <Link to="/detalle">Detalle estreno</Link>
         
           </ React.Fragment>


        )
    }


}

export default Estrenos