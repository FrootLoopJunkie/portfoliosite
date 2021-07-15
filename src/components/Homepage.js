import React, {Component} from 'react';

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div>
                <div id='diamondContainer'>
                    <svg id='aboutMeContainer' class='diamond' viewBox="-4 84 100 174" onClick={() => {this.props.aboutMeClickHandler()}}>
                        <polygon id='aboutMe' fill="#645184"  stroke-width="3" stroke-miterlimit="10" points="69.445,125 125,28.774 180.556,125 125,221.227'"/>
                        <text id="diamondText" x="-125%" y="72%" dominant-baseline="middle" text-anchor="middle" transform="rotate(-60)">About Me</text>
                    </svg>
                    <svg id='blogContainer' class='diamond' viewBox="-4 84 100 174" onClick={() => {this.props.blogClickHandler()}}>
                        <polygon id='blog' fill="#645184" stroke-width="3" stroke-miterlimit="10" points="69.445,125 125,28.774 180.556,125 125,221.227'"/>
                        <text id="diamondText" x="125%" y="75%" dominant-baseline="middle" text-anchor="middle" transform="scale(-1, 1) rotate(60)">Blog</text>
                    </svg>
                    <svg id='portfolioContainer' class='diamond' viewBox="-4 84 100 174" onClick={() => {this.props.portfolioClickHandler()}}>
                        <polygon id='portfolio' fill="#645184" stroke-width="3" stroke-miterlimit="10" points="69.445,125 125,28.774 180.556,125 125,221.227'"/>
                        <text id="diamondText" x="-125%" y="72%" dominant-baseline="middle" text-anchor="middle" transform="rotate(-60)">Portfolio</text>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Homepage;