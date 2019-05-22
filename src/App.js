import React, { Component } from 'react';
import Projects from "./Projects";
import Socials from "./Socials";
import Bio from "./Bio";
import profile from "./assets/NN.jpg";


class App extends Component {

  state={
    displayBio: false
  }

  displayBioToggle = () => {
    this.setState({ displayBio: !this.state.displayBio});
  }

  render() {

    return(
      <div>
        <img src={profile} alt="Nathan" className="profile"/>
        <Bio/>
        <hr/>
        <Projects/>
        <hr/>
        <Socials/>
      </div>
      ) 
  }
}

export default App;