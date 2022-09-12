import React, {Component} from 'react';

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
           <article className="detalle-card">
               <h1 className= "titulo1">{this.props.datosDetalle.title}</h1>
               <img className="imagen-detalle" src={`https://image.tmdb.org/t/p/w342/${this.props.datosDetalle.poster_path}`} alt='img'/>
             <section className="info-detalle"> 
               <h1 className= "titulo2"> Raiting: {this.props.datosDetalle.vote_average}</h1>
               <h1 className= "titulo2"> Fecha de estreno: {this.props.datosDetalle.release_date}</h1>
               <h1 className= "titulo2"> Duracion: {this.props.datosDetalle.runtime}</h1>
               <h1 className= "titulo2"> Genero: {this.props.datosDetalle.genres.map(function(genero){return genero.name})}</h1>
               <p className= "titulo3"> {this.props.datosDetalle.overview}</p>
               <p className="boton-detalle" onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosDetalle.id)}>{this.state.favsMessage}</p>
               </section>
           </article>


        )
    }


}

export default DetalleCard