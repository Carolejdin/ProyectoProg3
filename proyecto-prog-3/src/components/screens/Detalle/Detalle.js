import React, {Component} from 'react';
import DetalleCard from "../../DetalleCard/DetalleCard"

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           peliculas: []
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        let peliculasOk = []
        let url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`
        fetch(url)
            .then(response => response.json())
            .then(data => peliculasOk.push(data))
            .then(() => this.setState(
                {
                    peliculas: peliculasOk }
                    
            ))
            .catch(error => console.log('El error es' + error))
            console.log(this.state.peliculas)
    }
    

    render(){
        return(
            <React.Fragment >
           {this.state.peliculas.map((unDetalle, idx) => <DetalleCard key={unDetalle + idx} datosDetalle={unDetalle} />)}
           </React.Fragment>

        )
    }

}

export default Detalle