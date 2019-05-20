import React, {Component} from "react";
import SOCIALS from "./data/socials";

class Social extends Component {
	render() {
		const {title, image, link} = this.props.social;

		return(
			<div style={{display: "inline-block", margin:10}}>
				<a href={link}>
					<img src={image} alt="NULL" style={{width:50,height:50}}/>
				</a>
			</div>
		)
	}
}

class Socials extends Component {
	render() {
		return(
			<div>
				<h3>Social Media</h3>
				<div>
					{
					SOCIALS.map(SOCIALS=>{
						return(
							<Social key={SOCIALS.id} social={SOCIALS}/>
						)
					})
					}
				</div>
			</div>
		)
	}
}

export default Socials