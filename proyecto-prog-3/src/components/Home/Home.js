import React, { Component } from 'react';
import Populares from "../Populares/Populares"
import Estrenos from "../Estrenos/Estrenos"
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            populares: [],
            estrenos: [],
            valor: '',
            search: undefined
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                { populares: data.results }
            ))
            .catch(error => console.log('El error fue' + error))


        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                { estrenos: data.results }
            ))
            .catch(error => console.log('El error fue' + error))
    }

    busqueda(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&query=${this.state.valor}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    search: data.results,
                }

            ))
            .catch(error => console.log('El error fue' + error))
        console.log(this.state.search)
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        console.log('se ejecuta')
        this.setState({ valor: event.target.value },
        () => this.busqueda()
        )
    }


    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <form className="form" onSubmit={(event) => this.evitarSubmit(event)}>
                            <label>Buscador</label>
                            <input type='text' onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                </form>

                {this.state.estrenos.length === 0 ?
                 <h3 className="Titulo"> Cargando ... </h3> : ''}

                {this.state.search !== undefined ?
                <article>
                <h2 className="Titulo"> Resultado de busqueda </h2>
                <section className="card-container">
                {this.state.search.map((unaPeli, idx) => <Populares key={unaPeli + idx} datosPeli={unaPeli} />)}
                </section> 
                </article>:
                    <article>

                        <div>
                            <h2 className="Titulo"> Peliculas populares</h2>
                            <Link to="/populares"> Ver todas las peliculas populares</Link>
                        </div>
                        <section className="card-container">
                            {this.state.populares.map((unaPeli, idx) => <Populares key={unaPeli + idx} datosPeli={unaPeli} />)}
                        </section>

                        <div>
                            <h2 className="Titulo"> Peliculas de estreno</h2>
                            <Link to="/estrenos"> Ver todas las peliculas de estreno</Link>
                        </div>
                        <section className="card-container">
                            {this.state.estrenos.map((unEstreno, idx) => <Estrenos key={unEstreno + idx} datosEstreno={unEstreno} />)}
                        </section>
                    </article>
                    }
              
                 


            </React.Fragment>


        )
    }

}

export default Home