import Login from './Login';
import Register from './Register';
import React, { useEffect, useState } from 'react';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('/me').then((response) => {
			if (response.ok) {
				response.json().then((user) => setUser(user));
			}
		});
	}, []);
	
	function handleLogin(user) {
		setUser(user);
	}

	function handleLogout() {
		setUser(null);
	}
	return (
		<div className="App">
			<Register user={user} setUser={setUser} />
			<Login handleLogin={handleLogin} user={user} setUser={setUser} />
		</div>
	);
}

export default App;
