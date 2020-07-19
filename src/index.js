import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App'
import Joke from './components/Joke'
import MusicMaster from './project/music_master'
import Header from './components/Header'
import './index.css'

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			<Route exact path='/' render={() => <Header Component={App} />} />
			<Route path='/jokes' render={() => <Header Component={Joke} />} />
			<Route path='/music-master'	render={() => <Header Component={MusicMaster} />} />
		</Switch>
	</Router>,
	document.getElementById('root')
)
