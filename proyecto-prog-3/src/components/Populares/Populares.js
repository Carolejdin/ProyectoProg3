import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Populares extends Component{
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

        if(favoritos.includes(this.props.datosPeli.id)){
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
                 <h1>{this.props.datosPeli.original_title}</h1>
                 <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPeli.poster_path}` } alt='img' />
           <p className="link" onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosPeli.id)}>{this.state.favsMessage}</p>
           <p>{this.props.datosPeli.overview}</p>
           <h2> <Link className="link" to={`/detalle/${this.props.datosPeli.id}`}>Detalle popular</Link> </h2>
            </article>
           
       


        )
    }

}

export default Populares