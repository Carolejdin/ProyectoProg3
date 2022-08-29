import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Favoritos from "./components/Favoritos/Favoritos"
import Cartel from "./components/Cartel/Cartel"
import Footer from "./components/Footer/Footer"
import Populares from "./components/Populares/Populares"
import NotFound from "./components/NotFound/NotFound"

function App() {
  return (
    <React.Fragment>
    <p>React</p>
    <Header />
    <main>       
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/favoritos' component={Favoritos}/>
          <Route path='/populares' exact component={Populares}/>
          <Route path='/cartel' component={Cartel}/>
          <Route path='' component={NotFound}/>
        </Switch>
      </main>

      <Footer />

    </React.Fragment>

  );
}

export default App;
