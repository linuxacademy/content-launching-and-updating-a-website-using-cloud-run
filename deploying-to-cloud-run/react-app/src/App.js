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
                <a href="#about" className="w3-bar-item w3-button">About</a>
                <a href="#contact" className="w3-bar-item w3-button">Contact</a>
              </div>
            </div>
          </div>
          <header className="w3-display-container w3-content w3-wide" style={{maxWidth: 1500}} id="home">
            <img className="w3-image" src="img/bbq-cat.jpg" alt="Smokin' Good Time" />
          </header>
  
          <div className="w3-content w3-padding" style={{maxWidth: 1564}} >
  
            <div className="w3-container w3-padding-32" id="about">
              <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
              <p>Smokin' Good Time is one of the <strong>Cat'n Around Catskill 2022</strong> cats, created by Karen Robinson. </p>
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
  
