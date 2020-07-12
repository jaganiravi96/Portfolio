import React from 'react'
import PROJECTS from '../data/project'

const Project_prop = props => {
	const { title, description, link, image } = props.project_prop
	return (
		<div style={{ display: 'inline-block', width: 300, margin: 10 }}>
			<h3>{title}</h3>
			<p>{description}</p>
			<img src={image} alt='profile' style={{ width: 200, hight: 120 }} />
			<a href={link}>{link}</a>
		</div>
	)
}

const Project = () => (
	<div>
		<h2>Highlighted Project</h2>
		<div>
			{PROJECTS.map(PROJECT => (
				<Project_prop key={PROJECT.id} project_prop={PROJECT} />
			))}
		</div>
	</div>
)

export default Project
