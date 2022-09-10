import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Estrenos extends Component{
    constructor(props){
        super(props)
        this.state={
            favsMessage: 'Agregar a favoritos',
            boton: false,
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
    verMas(){
        this.setState({ boton:true})
    }
    verMenos(){
        this.setState({ boton:false})
       
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
            <React.Fragment>
           <article className="character-card">
               <h1>{this.props.datosEstreno.title}</h1>
               <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosEstreno.poster_path}`} alt='img'/>
               <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosEstreno.id)}>{this.state.favsMessage}</p> 
          <h2>  <Link className="link" to={`/detalle/${this.props.datosEstreno.id}`}>Detalle pelicula estreno</Link> </h2>
         
         {this.state.boton !== false?
<section>
<button onClick={()=>this.verMenos()} >Ver menos</button>
    <p> Descripcion: {this.props.datosEstreno.overview}</p>
</section>
: 
<button onClick= {()=> this.verMas()}> Ver mas</button>
         }
                
            </article>
         

            </React.Fragment>
        )
    }
 

}

export default Estrenos