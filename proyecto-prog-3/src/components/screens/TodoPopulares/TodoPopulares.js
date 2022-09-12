import React, {Component} from 'react';
import PeliculasCard from "../../PeliculasCard/PeliculasCard";
import Formulario from "../../Formulario/Formulario"

class TodoPopulares extends Component{
    constructor(props){
        super(props)
        this.state={
            page: 1,
            populares: [],
            populares2: []
        }
        
    }

 verMas(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=${this.state.page}`)
    .then( response=> response.json())
    .then(data => this.setState(
        {
            populares: data.results.concat(this.state.populares),
            populares2: data.results.concat(this.state.populares2)
        }
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
            {
                populares: data.results,
                populares2: data.results,
                page: this.state.page+1 
            }
        ))
        .catch( error => console.log ('El error fue' + error)) 
    }
    
    filtrar(texto){
        const popularesFiltradas = this.state.populares.filter(unaPeli => unaPeli.original_title.toLowerCase().includes(texto.toLocaleLowerCase()))
        this.setState({
            populares2: popularesFiltradas
        })    
    }

render(){
    console.log(this.state.populares2)
        return(
            <React.Fragment>
            {this.state.populares.length === 0 ?
                <h3 className="Titulo"> Cargando ... </h3> :
                <React.Fragment>
                <Formulario className="form" funcionFiltrar={(texto)=>this.filtrar(texto)}/>
            <article>
                <h1 className="Titulo"> Peliculas populares</h1>
                    <button className="boton" onClick={()=> this.verMas()}> Traer mas peliculas populares </button>
            <section className="card-container">
                {this.state.populares2.map((unaPeli, idx)=> <PeliculasCard key= {unaPeli + idx}  datosPeli= {unaPeli} />)}
                </section> 
            </article>  
            </React.Fragment>
            }      
             { 
          this.state.populares2.length !== 0 ? 
      '':
     <p className="resultado"> No hay resultados para su busqueda</p>
        }     
            </React.Fragment>
        )
    }
}

export default TodoPopulares