import React, {Component} from 'react';
import Populares from '../Populares/Populares';
import Estrenos from '../Estrenos/Estrenos'



class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            peliculas:[] //Es array de objetos literales con cada pelicula
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) //es un array de ids
            let peliculas = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favoritos.forEach(unIdFavorito => {
                //pedir por cada id los datos del personaje
                let url = `https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`
                fetch(url)
                    .then(response => response.json())
                    .then(data => peliculas.push(data))
                    .catch(error => console.log('El error es' + error))
            })

            console.log(peliculas);
        }
        
    }
    
    render(){
        return(
            <React.Fragment>
                <h2>Mis personajes favoritos de Rick & Morty</h2>
                 <section >
                    { 
                        this.state.peliculas.map( (unaPeli, idx) => <Populares key={unaPeli+idx} datosPeli={unaPeli}/>)
                        
                    }
                     { 
                        this.state.peliculas.map( (unEstreno, idx) => <Estrenos key={unEstreno+idx} datosEstreno={unEstreno}/>)
                        
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos;