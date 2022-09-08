import React, {Component} from 'react';
import Populares from '../Populares/Populares'


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
                let url = `https://rickandmortyapi.com/api/character/${unIdFavorito}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => peliculas.push(data))
                    .catch(e => console.log(e))
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
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos;