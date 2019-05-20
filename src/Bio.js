import React, {Component} from "react";

class Bio extends Component {
	
  state={
    displayBio: false
  }

  displayBioToggle = () => {
    this.setState({ displayBio: !this.state.displayBio});
  }

	render() {
		return(
			<div>
				<h1>Hello!</h1>
			        <p>My name is Nathan-Long Nguyen. I'm a graduate from the University of Houston</p>
			        <p>I have always been interested in tech and dreamed of working in that specific field</p>
			        {
			          this.state.displayBio ? (
			            <div>
			              <p>I live around the Houston area, and am consistently improving my skills each day</p>
			              <p>Currently I am creating a web based Pokedex, that allows the users to learn more about their pokemon.
			              This project will utilize React as the framework and is a means for me to learn JavaScript, HTML, and CSS.</p>
			              <p>Besides coding, I love to produce music, play basketball, workout, and of course eat!</p>
			              <button onClick={this.displayBioToggle}>Read less</button>
			            </div>
			          ) : (
			            <div>
			              <button onClick={this.displayBioToggle}>Read more</button>
			            </div>
			          )
			        }
			</div>
		)
	}
}

export default Bio;