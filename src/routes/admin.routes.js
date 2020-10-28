import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Events from '../pages/Events';

const authRoutes = ['/login', '/register'];

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={authRoutes}>
					<Redirect to='/home' />
				</Route>

				<Route exact path='/'>
					<h1>Raiz</h1>
				</Route>
				<Route exact path='/home'>
					<h1>HOME</h1>
				</Route>
				<Route exact path='/events'>
					<Events />
				</Route>
				<Route exact path='/events/submit'>
					<h1>Eventos Pendentes</h1>
				</Route>
				<Route exact path='/events/pending'>
					<h1>Eventos Pendentes</h1>
				</Route>

				<Route exact path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
