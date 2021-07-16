import React, {Component} from 'react';

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentApplication : null
        };
    }

    handleButton(e){
        this.setState({currentApplication : e.target.innerText})
    }

    render(){
        return(
            <div>
                <div id='portfolioMenu'>
                    <button onClick={(e) => {this.handleButton(e)}}>Rocket Clicker</button>
                    <button onClick={(e) => {this.handleButton(e)}}>Pixel-Art-O-Matic</button>
                    <button onClick={(e) => {this.handleButton(e)}}>Invisify</button>
                </div>
                {this.state.currentApplication === 'Rocket Clicker' && <iframe class='portfolioApp' src='http://rocketclicker.surge.sh/'></iframe>}
                {this.state.currentApplication === 'Pixel-Art-O-Matic' && <iframe class='portfolioApp' src='http://pixelartomatic.surge.sh/'></iframe>}
                {this.state.currentApplication === 'Invisify' && <iframe class='portfolioApp' src='https://invisify.herokuapp.com/'></iframe>}
            </div>
        )
    }
}

export default Portfolio;