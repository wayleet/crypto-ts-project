import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import PrivateRoute from './utils/router/private-route';
import AuthRootComponent from './components/auth';
import { getDesignTokens } from './utils/theme';
import Layout from './components/layout';
import { ColorModeContext } from './context';

const MyApp = () => {
	return (
		<div>
			<Layout>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path='/' element={<Home />} />
					</Route>
					<Route path='/' element={<Home />} />
					<Route path='login' element={<AuthRootComponent />} />
					<Route path='register' element={<AuthRootComponent />} />
				</Routes>
			</Layout>
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
