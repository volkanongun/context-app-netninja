import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
	return (
		<AuthContext.Consumer>{(authContext) => {return (
			<ThemeContext.Consumer>{(themeContext) => {

				const {isAuthenticated, toggleAuth} = authContext;
				const {isLightTheme, lightTheme, darkTheme} = themeContext;
				const theme = isLightTheme ? lightTheme : darkTheme;

				return (<nav style={{background: theme.ui, color: theme.syntax}}>
						<h1>Context App</h1>
						<div onClick={toggleAuth}>{isAuthenticated ? "Logged In" : 'Logged Out'}</div>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Content</li>
						</ul>
					</nav>)
				}}</ThemeContext.Consumer>
		)}}
		</AuthContext.Consumer>
	)
}

export default Navbar