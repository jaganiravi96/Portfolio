import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App'
import Joke from './components/Joke'
import Header from './components/Header'
import './index.css'

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			<Route exact path='/' render={() => <Header Component={App} />} />
			<Route path='/jokes' render={() => <Header Component={Joke} />} />
		</Switch>
	</Router>,
	document.getElementById('root')
)
