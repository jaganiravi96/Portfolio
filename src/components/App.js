import React, { Component } from 'react'
import Project from './Project'
import Social from './Social'
import Title from './Title'

//here we are creating react component so it will be created by class
//here will give the same name of class as we have file name

class App extends Component {
	state = { displayBio: false }

	toggleDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio })
	}

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<p>My name is Ravi</p>
				<Title />
				<p>I am looking forward to work with the meaningful project</p>

				{this.state.displayBio ? (
					<div>
						<p>I live in Mumbai, And code everyday.</p>
						<p>
							My favorite language is java and javascript. Also working with
							Framework
						</p>
						<p>
							Beside that I would like to listen music, and play sudoku and
							chess
						</p>
						<button onClick={this.toggleDisplayBio}>Read Less</button>
					</div>
				) : (
					<div>
						<button onClick={this.toggleDisplayBio}>Read More</button>
					</div>
				)}
				<Project />
				<Social />
			</div>
		)
	}
}

export default App
