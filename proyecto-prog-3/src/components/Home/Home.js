import React, {Component} from 'react';
import Pelicula from "../Pelicula/Pelicula"


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
    peliculas:[]
        }
    }
componentDidMount()
{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b')
    .then( response=> response.json())
    .then(data => this.setState(
        {peliculas: data.results}
    ))
    .catch( error => console.log ('El error fue' + error))
}
    render(){
        return(
            <React.Fragment>

           {this.state.peliculas.map((unaPeli, idx)=> <Pelicula key= {unaPeli + idx}  datosPeli= {unaPeli} />)}
           </React.Fragment>


        )
    }

}

export default Home