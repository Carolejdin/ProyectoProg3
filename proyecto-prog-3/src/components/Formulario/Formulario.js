import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
           valor: '',
        }
    }
    
    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        console.log('se ejecuta')
        this.setState({valor: event.target.value}, 
        ()=>this.props.funcionFiltrar(this.state.valor)
        )
    }    



    render(){
        return(
           <form onSubmit={(event) => this.evitarSubmit(event)}>
               <label>Buscar</label>
               <input type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
           </form>

        )
    }

}

export default Formulario