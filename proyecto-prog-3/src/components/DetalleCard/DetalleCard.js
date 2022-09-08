import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DetalleCard extends Component{
    constructor(props){
        super(props)
        this.state={
            favsMessage: 'Agregar a favoritos',
            
        }
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if(favoritos.includes(this.props.datosDetalle.id)){
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }

    }


    agregarYQuitarDeFavoritos(id){
        //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
        // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        //Preguntemos si el id ya está en el array.
        if(favoritos.includes(id)){ //includes retorna un booleano.
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
               <h1>{this.props.datosDetalle.original_title}</h1>
               <h1> Raiting: {this.props.datosDetalle.vote_average}</h1>
               <h1> Fecha de estreno: {this.props.datosDetalle.release_date}</h1>
               <h1> Duracion:{this.props.datosDetalle.runtime}</h1>
               <h1> Genero:{this.props.datosDetalle.genres.map(function(genero){return genero.name})}</h1>
               <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosDetalle.poster_path}`} alt='img'/>
               <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosDetalle.id)}>{this.state.favsMessage}</p>
               <p>{this.props.datosDetalle.overview}</p>
             
           </article>


        )
    }


}

export default DetalleCard