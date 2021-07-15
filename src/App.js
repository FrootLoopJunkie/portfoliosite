import React, {Component} from 'react';
import './App.css';
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage : 'home'
    };

    this.aboutMeClickHandler = this.aboutMeClickHandler.bind(this);
    this.blogClickHandler = this.blogClickHandler.bind(this);
    this.portfolioClickHandler = this.portfolioClickHandler.bind(this);
  }

  homeButton(){
    this.setState({currentPage: 'home'})
  }

  aboutMeClickHandler(){
    this.setState({currentPage: 'aboutMe'})
  }

  blogClickHandler(){
    this.setState({currentPage: 'blog'})
  }

  portfolioClickHandler(){
    this.setState({currentPage: 'portfolio'})
  }

  render(){
    return (
      <div className="App">
        <div id="topbar">
          {this.state.currentPage !== 'home' && <button id='homeButton' onClick={() => {this.homeButton()}}>Home</button>}
          {this.state.currentPage === 'home' && <h1 id="name">Kolby Evans</h1>}
          {this.state.currentPage === 'home' && <p id="title">-Software Engineer</p>}
        </div>
        {this.state.currentPage === 'home' && <Homepage
          aboutMeClickHandler = {this.aboutMeClickHandler}
          blogClickHandler = {this.blogClickHandler}
          portfolioClickHandler = {this.portfolioClickHandler}
        />}
        {this.state.currentPage === 'aboutMe' && <AboutMe/>}
        <div id='footer'>
          <span id='footerText'>Email: Kolbyblade@gmail.com | Twitter: @FrootLoopJunkie | Github: @FrootLoopJunkie </span>  
        </div>
      </div>
    );
  }
}

export default App;
