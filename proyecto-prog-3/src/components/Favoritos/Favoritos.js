import React, {Component} from 'react';
import Populares from '../Populares/Populares';
import Estrenos from '../Estrenos/Estrenos'



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

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favoritos.forEach(unIdFavorito => {
                //pedir por cada id los datos del personaje
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

    
        render(){
            console.log(this.state.peliculas)
        return(
            <React.Fragment>
                <h2 className="Titulo">Mis peliculas favoritas</h2>
                 <section className="card-container-favs">
                 {this.state.peliculas.map((unEstreno, idx) => <Estrenos key={unEstreno + idx} datosEstreno={unEstreno} />)} 
                 </section>
              
            </React.Fragment>
        )
    }
}

export default Favoritos;