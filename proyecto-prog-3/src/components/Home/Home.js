import React, {Component} from 'react';
import Populares from "../Populares/Populares"
import Estrenos from "../Estrenos/Estrenos"
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            populares:[],
            estrenos:[]
        }
    }
    
componentDidMount()
{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=1')
    .then( response=> response.json())
    .then(data => this.setState(
        {populares: data.results}
    ))
    .catch( error => console.log ('El error fue' + error))


    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=1')
    .then( response=> response.json())
    .then(data => this.setState(
        {estrenos: data.results}    
    ))
    .catch( error => console.log ('El error fue' + error))
}

    render(){
        return(
            <React.Fragment>
                 {this.state.estrenos.length === 0 ?
            <h3> Cargando ... </h3> :
            
            <div> 
            <Link to="/populares"> Ver todas las peliculas populares</Link>
            {this.state.populares.map((unaPeli, idx)=> <Populares key= {unaPeli + idx}  datosPeli= {unaPeli} />)}
            </div>
    }
           <div> 
          <Link to="/estrenos"> Ver todas las peliculas de estreno</Link>
        
           { this.state.estrenos.map((unEstreno, idx)=> <Estrenos key= {unEstreno + idx}  datosEstreno= {unEstreno} />)} 
           </div> 

           </React.Fragment>
                

        )
    }

}

export default Home