import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

	const [isLightTheme, setIsLightTheme] = useState(true)
	const [lightTheme, setLightTheme] = useState({syntax : '#555', ui: '#ddd', bg: "#eee"})
	const [darkTheme, setDarkTheme] = useState({syntax : '#ddd', ui: '#333', bg: "#555"})

	// console.log(lightTheme,darkTheme, " ∆∆∆")
	let toggleTheme = function(){
		setIsLightTheme(!isLightTheme)
	}

	return (
		<div>
			<ThemeContext.Provider value={{
				"isLightTheme" : isLightTheme, 
				"lightTheme": lightTheme, 
				"darkTheme" : darkTheme, 
				"toggleTheme" : toggleTheme}}>
				
				{props.children}
			</ThemeContext.Provider>
		</div>
	)
}

export default ThemeContextProvider