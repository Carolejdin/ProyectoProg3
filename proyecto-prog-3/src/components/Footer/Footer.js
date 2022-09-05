import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <React.Fragment>
           <p>Agustina Breitfeld</p>
           <p>Ignacia Doldan</p>
           <p>Carol Ejdin</p>
           </React.Fragment>

        )
    }

}

export default Footer