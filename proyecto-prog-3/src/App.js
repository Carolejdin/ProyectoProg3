import React from "react";
import { Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Favoritos from "./components/Favoritos/Favoritos"
import TodoEstrenos from "./components/TodoEstrenos/TodoEstrenos"
import Detalle from "./components/Detalle/Detalle"
import Footer from "./components/Footer/Footer"
import TodoPopulares from "./components/TodoPopulares/TodoPopulares"
import NotFound from "./components/NotFound/NotFound"
import './style.css';


function App() {
  return (
    <React.Fragment>
    <Header />
    <main>   
    
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/favoritos' component={Favoritos}/>
          <Route path='/populares' exact component={TodoPopulares}/>
          <Route path='/estrenos' component={TodoEstrenos}/>
          <Route path='/detalle/:id' component={Detalle}/>
          <Route path='' component={NotFound}/>
        </Switch>
      </main>  
      <Footer />

    </React.Fragment>

  );
}

export default App;
