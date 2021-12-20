import React, { useEffect, useState } from 'react';

const Register = () => {
	const [user, setUser] = useState(null);
	const [formData, setFormData] = useState({
		first_name: '',
		Last_name: '',
		email: '',
		username: '',
		password: '',
		password_confirmation: '',
	});

	const newUser = {
		first_name: formData.first_name,
		Last_name: formData.Last_name,
		email: formData.email,
		username: formData.username,
		password: formData.password,
		password_confirmation: formData.password_confirmation,
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}).then((response) => {
			if (response.ok) {
				response.json().then((user) => setUser(user));
				console.log(newUser);
			}
		});
	}

	return (
		<>
			<form className="registration" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						onChange={handleChange}
					/>
					<input
						type="text"
						name="last_name"
						placeholder="Last Name"
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="text"
						name="username"
						placeholder="Username"
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="password"
						name="password_confirmation"
						placeholder="Confirm Password"
						onChange={handleChange}
					/>
				</p>
				<p>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						Submit
					</button>
					<button>Reset Form</button>
				</p>
			</form>
		</>
	);
};

export default Register;
