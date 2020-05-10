import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

const AuthContextProvider = (props) => {

	const [isAuthenticated, setIsAuthenticated] = useState(false)

	let toggleAuth = function(){
		setIsAuthenticated(!isAuthenticated)
	}

	return (
		<div>
			<AuthContext.Provider value={{
				"isAuthenticated" : isAuthenticated, 
				"toggleAuth" : toggleAuth}}>
				{props.children}
			</AuthContext.Provider>
		</div>
	)
}

export default AuthContextProvider;