import React, { useEffect, useState } from 'react';

const AddChild = () => {
	const [formData, setFormData] = useState({
		first_name: '',
		age: '',
	});

	const newChild = {
		first_name: formData.first_name,
		age: formData.age,
	};

	const resetForm = () => {
		setFormData({ first_name: '', age: '' });
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/addchild', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newChild),
		}).then((response) => {
			if (response.ok) {
				console.log(newChild);
                resetForm();
			}
		});
	};
	return (
		<>
			<form className="add-child" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						value={formData.first_name}
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="text"
						name="age"
						placeholder="Age"
						value={formData.age}
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
				</p>
			</form>
		</>
	);
};

export default AddChild;
