import React from 'react';
import Background from './photos/IMG20191201174113.jpg';
import facebook from "./photos/facebook.svg";
import github from "./photos/github.svg";
import instagram from "./photos/instagram.svg";
import linkedin from "./photos/linkedin.svg";
import Footer from '../Footer/Footer';
import './home.css';

function Home(){
    return(
        <div className="home">
        <div>
            <div className="outer-box row">
                <div className="col">
                <div className="Image"><img className = "Image" src={Background} /> </div>
                </div>
                <div className="col">
                <div  className="intro"><h1>Saloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio design.</h1>
                </div>
                 <div className="icons">
                    <a href="https://github.com/salonilakhotia"><img className="icon" src={github} alt="icon"></img></a>
                    <a href="https://www.instagram.com/saloni_lakhotia_/"><img className="icon" src={instagram} alt="icon"></img></a>
                    <a href="https://www.facebook.com/saloni.lakhotia.242"><img className="icon" src={facebook} alt="icon"></img></a>
                    <a href="https://www.linkedin.com/in/saloni-lakhotia-11b0a7175"><img className="icon" src={linkedin} alt="icon"></img></a>
                 </div>
                </div>
            </div>

            <div className="description">
                <h1>Saloni Lakhotia</h1>
                <h3>Saloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio designSaloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio designSaloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio designSaloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio designSaloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio designSaloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio designSaloni Lakhotia ...Hey..trhis is my pertfolio design.
                     Saloni Lakhotia ...Hey..trhis is my pertfolio design</h3>
            </div>
            <Footer />
            </div>
        </div>
    );
}

export default Home

/* 

<div className="home">
          <div className="Hometext">
              <img className = "Image" src={Background} />
              <div className="home-text name">Saloni Lakhotia</div><br></br>
              <div className="All_Icons">
              <ul>
                <li><a href="https://github.com/salonilakhotia"><img className="icon" src={github} alt="icon"></img></a></li>
                <li><a href="https://www.instagram.com/saloni_lakhotia_/"><img className="icon" src={instagram} alt="icon"></img></a></li>
                <li><a href="https://www.facebook.com/saloni.lakhotia.242"><img className="icon" src={facebook} alt="icon"></img></a></li>
                <li><a href="https://www.linkedin.com/in/saloni-lakhotia-11b0a7175"><img className="icon" src={linkedin} alt="icon"></img></a></li>
              </ul>
              </div> //all_icons
          </div>
          <div className= "home-text text2" >Hey!!! welcome to home page!!!.Hey!!! welcome to home page!!!.</div>
        </div>
        <Footer />
</div>
*/