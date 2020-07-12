import React, { Component } from 'react'

const Jokes = ({ joke }) => {
	const { id, setup, punchline } = joke
	return (
		<p style={{ margin: 20 }}>
			{setup}
			<em>{punchline}</em>
		</p>
	)
}
class Joke extends Component {
	state = { joke: {}, jokes: [] }

	componentDidMount() {
		fetch('http://official-joke-api.appspot.com/random_joke')
			.then(response => response.json())
			.then(json => this.setState({ joke: json }))
	}

	fetchJokes = () => {
		fetch('http://official-joke-api.appspot.com/random_ten')
			.then(response => response.json())
			.then(json => this.setState({ jokes: json }))
	}
	render() {
		const { setup, punchline } = this.state.joke

		return (
			<div>
				<h2>Highlighted Joke</h2>
				<Jokes joke={this.state.joke} />
				<hr />
				<h3>want more jokes</h3>
				<button onClick={this.fetchJokes}>Click Me</button>
				{this.state.jokes.map(joke => (
					<Jokes key={joke.id} joke={joke} />
				))}
			</div>
		)
	}
}

export default Joke
