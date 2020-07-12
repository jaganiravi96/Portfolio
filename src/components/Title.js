import React, { Component } from 'react'

const TITLES = [
	'a software engineer',
	'a music lover',
	'an enthusiastic learner',
	'an adventure seeker'
]

class Title extends Component {
	state = { titleindex: 0 }

	componentDidMount() {
		this.animateTitle()
	}

	animateTitle = () => {
		this.titleInterval = setInterval(() => {
			const titleindex = (this.state.titleindex + 1) % TITLES.length
			this.setState({ titleindex })
		}, 4000)
	}

	componentWillUnmount = () => {
		clearInterval(this.titleInterval)
	}

	render() {
		const title = TITLES[this.state.titleindex]
		return <div>I am {title}</div>
	}
}

export default Title
