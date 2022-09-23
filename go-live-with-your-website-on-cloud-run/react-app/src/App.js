/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";

class App extends React.Component {
    render (){
      return (
      <div className="App">
        <link rel="stylesheet" href="css/main.css"></link>
          <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <a href="#home" className="w3-bar-item w3-button"><img src="img/logo.png" alt="Catskill IT" /></a>
              <div id="topNav" className="w3-left">
                <a href="#featured" className="w3-bar-item w3-button">Featured</a>
                <a href="catalog" className="w3-bar-item w3-button">Cat-a-Log</a>
                <a href="#about" className="w3-bar-item w3-button">About</a>
                <a href="#contact" className="w3-bar-item w3-button">Contact</a>
              </div>
            </div>
          </div>
  
          <div className="w3-content w3-padding" style={{maxWidth: 1564}} >

          <div className="w3-container w3-padding-32" id="featured">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Featured</h3>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Thomas At Your Service</div>
                <img src="img/thomas.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Cat in a Gilded Cage</div>
                <img src="img/cat-in-a-cage.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Huckleberry the Farm Cat</div>
                <img src="img/farmer-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Historic Purrservation Cat III</div>
                <img src="img/historic-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-container w3-padding-32" id="catalog">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Cat-a-Log</h3>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Autumn Serenade</div>
                <img src="img/catalog/autumn-seranade.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Bubbles</div>
                <img src="img/catalog/bubbles.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Cap-Citi-Cat</div>
                <img src="img/catalog/cap-citi-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Cat-oon Balloon</div>
                <img src="img/catalog/cat-oon-balloon.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Cat-Strology</div>
                <img src="img/catalog/cat-strology.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Cataluna</div>
                <img src="img/catalog/cataluna.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Catskill Clipper</div>
                <img src="img/catalog/catskill-clipper.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Catskill Quilt Cat</div>
                <img src="img/catalog/catskill-quilt-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Chakra Cat</div>
                <img src="img/catalog/chakra-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Chesire Cat</div>
                <img src="img/catalog/chesire-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Day Of the Dead</div>
                <img src="img/catalog/day-of-the-dead.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Foxy Cat</div>
                <img src="img/catalog/foxy-cat.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Fruitopia</div>
                <img src="img/catalog/fruitopia.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Geisha Kitty</div>
                <img src="img/catalog/geisha-kitty.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Home Is Where the Heart Is</div>
                <img src="img/catalog/home-is-where-the-heart-is.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Indian Summer</div>
                <img src="img/catalog/indian-summer.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Indigo Blues</div>
                <img src="img/catalog/indigo-blues.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Kitty Be Well</div>
                <img src="img/catalog/kitty-be-well.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Kitty Stardust</div>
                <img src="img/catalog/kitty-stardust.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Merry Go Kitty</div>
                <img src="img/catalog/merry-go-kitty.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Namaste</div>
                <img src="img/catalog/namaste.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Naturalis Purpura</div>
                <img src="img/catalog/naturalis-purpura.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Night And Day</div>
                <img src="img/catalog/night-and-day.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Polly Dactyl</div>
                <img src="img/catalog/polly-dactyl.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Purrtriot</div>
                <img src="img/catalog/purrtriot.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Spirit Wings</div>
                <img src="img/catalog/spirit-wings.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Spiro</div>
                <img src="img/catalog/spiro.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Sprinkles</div>
                <img src="img/catalog/sprinkles.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Super Chef Pizza Maker</div>
                <img src="img/catalog/super-chef-pizza-maker.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Sweet As a Rose</div>
                <img src="img/catalog/sweet-as-a-rose.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">The Guardian, Cha-Kar-Ra</div>
                <img src="img/catalog/the-guardian-cha-kar-ra.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Tiger With Woods</div>
                <img src="img/catalog/tiger-with-woods.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Tyger Tyger</div>
                <img src="img/catalog/tyger-tyger.jpg.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Venti</div>
                <img src="img/catalog/venti.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Winter Happiness</div>
                <img src="img/catalog/winter-happiness.jpg" alt="A Catskill Cat 2022"  style="width:100%">
              </div>
            </div>
          </div>

            <div className="w3-container w3-padding-32" id="about">
              <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
              <p>A sample of the <strong>Cat'n Around Catskill 2022</strong> cats, created by various artists. </p>
              <p><strong>Catskill IT</strong> is a fictional company created by Joseph Lowery.</p>
            </div>
  
            <div className="w3-container w3-padding-32" id="contact">
              <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
              <p>Have a question or comment? Reach out to me via <a href="mailto:joe-lowery@pluralsight.com">email</a> or on <a href="https://www.linkedin.com/in/joseph-lowery-nyc/" target="new">LinkedIn</a>.</p>
            </div>
  
          </div>
  
          <footer className="w3-center w3-black w3-padding-16">
            <p><a href="https://acloudguru.com/" target="new"><img src="img/ps-acg.png" alt="Cloud Guru - A Pluralsight Company" /></a></p>
          </footer>
          
      </div>	
    );
    }
  }
  
  export default App;
  
