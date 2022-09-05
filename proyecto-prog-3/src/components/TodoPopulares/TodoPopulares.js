import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Populares from "../Populares/Populares"

class TodoPopulares extends Component{
    constructor(props){
        super(props)
        this.state={
            page: 1,
            populares: [],
        }
        
    }

 verMas(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=${this.state.page}`)
    .then( response=> response.json())
    .then(data => this.setState(
        {populares: data.results.concat(this.state.populares)}
    ))
    .catch( error => console.log ('El error fue' + error)) 
    this.setState(
        { page: this.state.page+1 }
    )
 }

    componentDidMount()
    {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=${this.state.page}`)
        .then( response=> response.json())
        .then(data => this.setState(
            {populares: data.results.concat(this.state.populares),
            page: this.state.page+1 }
        ))
        .catch( error => console.log ('El error fue' + error)) 
    }
        
render(){
    console.log(this.state.populares)
        return(
<div>
    {this.state.populares.length === 0 ?
    <h3> Cargando ... </h3> :
    <article>
    <button onClick={()=> this.verMas()}> Traer mas peliculas populares </button>
     <div>
     {this.state.populares.map((unaPeli, idx)=> <Populares key= {unaPeli + idx}  datosPeli= {unaPeli} />)}
    </div> 
     </article>
 }             

</div>
        

        )
    }

}

export default TodoPopulares