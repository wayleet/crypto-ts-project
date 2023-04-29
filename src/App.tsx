import React, { FC } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PrivateRoute from './utils/router/private-route';
import AuthRootComponent from './pages/auth';
import { getDesignTokens } from './utils/theme';
import Layout from './components/layout';
import { ColorModeContext } from './context';
import Watchlist from './pages/watchlist';
import News from './pages/news';
import Settings from './pages/settings';

const MyApp: FC = () => {
	return (
		<div>
			<Routes>
				<Route element={<Layout />}>
					<Route element={<PrivateRoute />}>
						<Route path='/' element={<Home />} />
						<Route path='/watchlist' element={<Watchlist />} />
						<Route path='/news' element={<News />} />
						<Route path='/settings' element={<Settings />} />
					</Route>
					<Route path='/' element={<Home />} />
					<Route path='login' element={<AuthRootComponent />} />
					<Route path='register' element={<AuthRootComponent />} />
				</Route>
			</Routes>
		</div>
	);
};

const ToggleColorMode = () => {
	const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) =>
					prevMode === 'light' ? 'dark' : 'light'
				);
			}
		}),
		[]
	);

	const theme = React.useMemo(
		() => createTheme(getDesignTokens(mode)),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MyApp />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ToggleColorMode;
