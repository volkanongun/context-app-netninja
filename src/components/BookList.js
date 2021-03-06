import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {
	return (
		<ThemeContext.Consumer>{(context) => {

			const {isLightTheme, lightTheme, darkTheme} = context;
			const theme = isLightTheme ? lightTheme : darkTheme;

			return(<div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
			<ul>
				<li style={{background: theme.ui}}>the way of kings</li>
				<li style={{background: theme.ui}}>the name of the wind</li>
				<li style={{background: theme.ui}}>the final empire</li>
			</ul>
		</div>)
		}}
		</ThemeContext.Consumer>
	)
}

export default BookList