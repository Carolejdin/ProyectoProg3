import React, {Component} from 'react';
import PeliculasCard from "../../PeliculasCard/PeliculasCard"


class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            peliculas:[],
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) 
            let peliculasOk = [];

            favoritos.forEach(unIdFavorito => {
                let url = `https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`
                fetch(url)
                    .then(response => response.json())
                    .then(data => peliculasOk.push(data))
                    .then(() => this.setState(
                        {
                            peliculas: peliculasOk }
                            
                    ))
                    .catch(error => console.log('El error es' + error))
                  
            }) 
            
        }
}

borrar(id){
    //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
    // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')

    if(recuperoStorage !== null){
        let favoritosToArray = JSON.parse(recuperoStorage);
        favoritos = favoritosToArray
    }

    //Preguntemos si el id ya está en el array.
    if(favoritos.includes(id)){ 
        favoritos = favoritos.filter(unId => unId !== id);
        this.setState({
        peliculas: this.state.peliculas.filter(unaPeli => unaPeli.id !== id) 
        })
    }


    let favoritosToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosToString);

    console.log(localStorage);

}

    
        render(){
            console.log(this.state.peliculas)
        return(
            <React.Fragment>
                <h2 className="Titulo">Mis peliculas favoritas</h2>
                 <section className="card-container-favs">
                 {this.state.peliculas.map((unaPeli, idx) => <PeliculasCard key={unaPeli + idx} datosPeli={unaPeli} borrar={(peliFiltro)=> this.borrar(peliFiltro)} />)} 
                 </section>
              
            </React.Fragment>
        )
    }
}

export default Favoritos;