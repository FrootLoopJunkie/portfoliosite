import React, {Component} from 'react';

class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentImage : 2
        };
    }

    changeImage(e){
        console.log(e.target.id)
        if(e.target.id === 'leftArrow'){
            if(this.state.currentImage > 1){
                this.setState({currentImage : this.state.currentImage - 1});
            }else{
                this.setState({currentImage : 3});
            }
        }else{
            if(this.state.currentImage < 3){
                this.setState({currentImage : this.state.currentImage + 1});
            }else{
                this.setState({currentImage : 1});
            }
        }
    }

    render(){
        return(
            <div id='aboutMePage'>
                <div id='statpage1'>
                    <p class='charStat'>Class: Full Stack Software Engineer </p>
                    <p class='charStat'>Level: 22</p>
                    <p class='charStat'>Player: Name: Kolby Blade Minard Evans</p>
                    <p class='charStat'>Race: Human</p>
                    <p class='charStat'>Alignment: Chaotic Good</p>
                    <p class='charStat'>Languages: English, JavaScript, HTML, and CSS</p>
                </div>
                <div id='backgroundContainer'>
                    <p id='backgroundHeader'>Background</p>
                    <p id='background'>
                        Hello! My name is Kolby Evans, and I'm a Full Stack Software Engineer based out of Washington State.
                         I started programming around 2013 in Java because I wanted to make games.
                         I spent a few years as a hobby learning basic Java along with some C# but eventually, I would abandon that path and join the U.S. Armed Forces as a grunt in the Army.
                         <br></br>
                         <br></br>
                                I served in Texas as well as S. Korea, and was given a lot of time to think about the carreer I wanted post Army.
                         I decided to revisit Software Engineering and to do it right, I took an 18-week full-stack Javascript Bootcamp during my transition out of the Army and pushed myself 
                         to absorb as much knowledge as I could.
                         <br></br>
                         <br></br>
                            After graduating from Galvanize I was taken abord as an SEIR where I continued to grow as a Software Engineer. My day-to-day consisted of mentoring 
                        studedents, grading assignments, and being the connecting point between the staff and students.
                         <br></br>
                         <br></br>
                         Currently, I'm pursuing a degree in Computer Science while also looking to start my carrer in the industry. I know that I bring a lot to the table, but I also know that I have a lot
                         to learn, I'm looking for somewhere where I can grow as a Software Engineer and hopefully call home.  
                    </p>
                    <button class='arrow' id='leftArrow' onClick={(e) => {this.changeImage(e)}}>Left Arrow</button>
                    <img src={`./../images/aboutmeP${this.state.currentImage}.jpg`} class='aboutMeImage'></img>
                    <button class='arrow' id='rightArrow' onClick={(e) => {this.changeImage(e)}}>Right Arrow</button>
                </div>
                <div id='statpage2'>
                    <p class='charStat'>Strength: 15</p>
                    <p class='charStat'>Dexterity: 12</p>
                    <p class='charStat'>Constitution: 11</p>
                    <p class='charStat'>Intelligence: 14</p>
                    <p class='charStat'>Wisdom: 8</p>
                    <p class='charStat'>Charisma: 2</p>
                </div>   
            </div>
        )
    }
}

export default AboutMe;