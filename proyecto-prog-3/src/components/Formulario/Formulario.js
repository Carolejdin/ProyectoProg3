import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
           valor: '',
           peliculas: []
        }
    }
    
    componentDidMount(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b')
    .then( response=> response.json())
    .then(data => this.setState({peliculas: data.results}))
    .catch( error => console.log ('El error fue' + error))
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({valor: event.target.value}, 
        this.state.peliculas.filter(unaPeli => unaPeli.original_title === this.state.valor)

        // console.log(this.state.valor)
    )    //target y value estan en la diapo explicados
    }


    render(){
        return(
           <form onSubmit={(event)=> this.evitarSubmit(event)}>
               <label>Buscar</label>
               <input type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
               <input type='submit' value='submit'/>
           </form>

        )
    }

}

export default Formulario