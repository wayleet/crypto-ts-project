import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import PrivateRoute from './utils/router/private-route';
import AuthRootComponent from './components/auth';

const App = () => {
	return (
		<div>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<AuthRootComponent />} />
				<Route path='register' element={<AuthRootComponent />} />
			</Routes>
		</div>
	);
};

export default App;
