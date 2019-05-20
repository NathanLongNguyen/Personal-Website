import React, {Component} from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
	render(){
		console.log(`this.props ${this.props}`);

		const {title, image, description, link} = this.props.project;

		return(
			<div style={{display: "inline-block", width:300, margin:20}}>
				<h3>{title}</h3>
				<img src={image} alt="null" style={{width:200, height:120}}/>
				<p>{description}</p>
				<a href={link}>{link}</a>
			</div>
		)
	}
}

class Projects extends Component {
	render(){
		return(
			<div>
				<h2>Highlighted Projects</h2>
				<div>
					{
						PROJECTS.map(PROJECTS => {
						    return (
								<Project key={PROJECTS.id} project={PROJECTS}/>
							);
						}) 
					}
				</div>
			</div>
		)
	}
}

export default Projects;