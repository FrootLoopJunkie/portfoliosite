import React, {Component} from 'react';

class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
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
                         Currently, I work as an SEIR (Software Engineering Immersive Resident) for Galvanize Inc., 
                         though with a soon-to-be expiring contract, and an incredible drive to learn more and grow in this industry, I'm currently on the hunt for a long-term home. 
                    </p>
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