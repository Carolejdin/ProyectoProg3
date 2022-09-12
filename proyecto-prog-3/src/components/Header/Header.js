import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <nav className="header">
              <img className= "imagen"src="img/logo.webp" alt="logo Cinema"></img>
           <ul >
           <li>   <Link className="navbar" to="/" exact="true">Home</Link></li> 
           <li>   <Link className="navbar" to="/favoritos">Favoritos</Link></li> 
           <li>   <Link className="navbar" to="/populares">Populares</Link></li> 
           <li>   <Link className="navbar" to="/estrenos">Estrenos</Link>   </li> 
                 </ul>
            </nav>
            

        )
    }

}

export default Header