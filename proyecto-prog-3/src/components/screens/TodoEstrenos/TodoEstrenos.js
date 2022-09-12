import React, {Component} from 'react';
import PeliculasCard from "../../PeliculasCard/PeliculasCard"
import Formulario from "../../Formulario/Formulario"

class TodoEstrenos extends Component{
    constructor(props){
        super(props)
        this.state={
            page: 1,
            estrenos: [],
            estrenos2: [],
        }
        
    }

 verMas(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=${this.state.page}`)
    .then( response=> response.json())
    .then(data => this.setState(
        {
            estrenos: data.results.concat(this.state.estrenos),
            estrenos2: data.results.concat(this.state.estrenos2)
        }
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
            {
                estrenos: data.results,
                estrenos2: data.results,
                page: this.state.page+1 }
        ))
        .catch( error => console.log ('El error fue' + error)) 
    }
        

    filtrar(texto){
        const estrenosFiltrados = this.state.estrenos.filter(unEstreno => unEstreno.original_title.toLowerCase().includes(texto.toLocaleLowerCase()))
        this.setState({
            estrenos2: estrenosFiltrados
        })    
    }
    
render(){
    console.log(this.state.estrenos2)
        return(
            <React.Fragment> 
                  
            {this.state.estrenos.length === 0 ?
            <h3 className="Titulo"> Cargando ... </h3> :
            <React.Fragment> 
            <Formulario funcionFiltrar={(texto)=>this.filtrar(texto)}/> 
            <article>
            <h1 className="Titulo"> Peliculas de estreno </h1>
            <button className="boton" onClick={()=> this.verMas()}> Traer mas peliculas de estrenos </button>
        <section className="card-container">
            { this.state.estrenos2.map((unaPeli, idx)=> <PeliculasCard key= {unaPeli + idx}  datosPeli= {unaPeli} />)} 
            </section>
        </article> 
        </React.Fragment> 
        }
      
      { 
          this.state.estrenos2.length !== 0 ? 
      '':
     <p className="resultado"> No hay resultados para su busqueda</p>
        }             
       </React.Fragment> 

        )
    }

}

export default TodoEstrenos