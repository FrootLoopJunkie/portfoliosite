import React, {Component} from 'react';
import './App.css';
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'

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
        {this.state.currentPage === 'portfolio' && <Portfolio/>}
        <div id='footer'>
          <span id='footerText'>
          <a class='link' href='https://docs.google.com/document/d/1kRjimEuAwbmM3VPDxrxHSRK1NVXAOGRNYd6Gy4XKYyA/edit?usp=sharing'>Resume </a> 
          | Email: <a class='link' href='mailto: Kolbyblade@gmail.com'>Kolbyblade@gmail.com </a> 
          | Twitter: <a class='link' href='https://twitter.com/FrootLoopJunkie'>@FrootLoopJunkie </a> 
          | Github: <a class='link' href='https://github.com/FrootLoopJunkie'>@FrootLoopJunkie </a> 
          | LinkedIn: <a class='link' href='https://www.linkedin.com/in/kolby-evans-048599207/'>Kolby Evans </a> 
          
          </span>  
        </div>
      </div>
    );
  }
}

export default App;
