import Login from './Login';
import Register from './Register';
import Nav from './Nav';
import React, { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('/me').then((response) => {
			if (response.ok) {
				response.json().then((user) => setUser(user));
			}
		});
	}, []);

	const handleLogin = (user) => {
		setUser(user);
	};

	const logout = () => {
		setUser(null);
	};
	return (
		<div className="App">
			<Nav user={user} logout={logout} />
			<Register user={user} setUser={setUser} />
			<Login handleLogin={handleLogin} user={user} setUser={setUser} />
		</div>
	);
};

export default App;
