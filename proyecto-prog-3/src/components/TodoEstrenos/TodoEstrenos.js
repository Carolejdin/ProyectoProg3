import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Estrenos from "../Estrenos/Estrenos"

class TodoEstrenos extends Component{
    constructor(props){
        super(props)
        this.state={
            page: 1,
            estrenos: [],
        }
        
    }

 verMas(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=${this.state.page}`)
    .then( response=> response.json())
    .then(data => this.setState(
        {estrenos: data.results.concat(this.state.estrenos)}
    ))
    .catch( error => console.log ('El error fue' + error)) 
    this.setState(
        { page: this.state.page+1 }
    )
 }

    componentDidMount()
    {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=${this.state.page}`)
        .then( response=> response.json())
        .then(data => this.setState(
            {estrenos: data.results.concat(this.state.estrenos),
            page: this.state.page+1 }
        ))
        .catch( error => console.log ('El error fue' + error)) 
    }
        
render(){
    console.log(this.state.estrenos)
        return(
<div>
    {this.state.estrenos.length === 0 ?
    <h3> Cargando ... </h3> :
    <article>
    <button onClick={()=> this.verMas()}> Traer mas peliculas de estrenos </button>
     <div>
        { this.state.estrenos.map((unEstreno, idx)=> <Estrenos key= {unEstreno + idx}  datosEstreno= {unEstreno} />)} 
    </div> 
     </article>
 }             

</div>
        

        )
    }

}

export default TodoEstrenos