import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Estrenos extends Component{
    constructor(props){
        super(props)
        this.state={
            favsMessage: 'Agregar a favoritos',
            verMas: false, 
            valor: 'Ver mas',
            
        }
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if(favoritos.includes(this.props.datosEstreno.id)){
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }

    }
    botonVerMas(){
        if(this.state.verMas !== false){
            this.setState(
                {
                    verMas: false,
                    textoBoton: "Ver menos",
                }
            )
        } else {
            this.setState(
                {
                    verMas: true,
                    textoBoton: "Ver mas",
                }
            )
        }
    }


    agregarYQuitarDeFavoritos(id){

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        //Preguntemos si el id ya está en el array.
        if(favoritos.includes(id)){ 
            favoritos = favoritos.filter(unId => unId !== id);
            //mostar al usuario un nuevo texto: agregar a favoritos
            this.setState({
                favsMessage: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            //mostar un texto diferente al usuario. Quitar de favs
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }


        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }
    render(){
        return(
           <article className="character-card">
               <h1>{this.props.datosEstreno.original_title}</h1>
               <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosEstreno.poster_path}`} alt='img'/>
               <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosEstreno.id)}>{this.state.favsMessage}</p> 
           <p>{this.props.datosEstreno.overview}</p>
          <h2>  <Link className="link" to={`/detalle/${this.props.datosEstreno.id}`}>Detalle estreno</Link> </h2>
         
          <article className={ this.state.verMas ? 'botonVerMas' : '' }>
                <button onClick={()=>this.botonVerMas()}> {this.state.valor}</button>
            </article>
           </article>


        )
    }


}

export default Estrenos