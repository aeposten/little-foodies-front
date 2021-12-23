import React, { useEffect, useState } from 'react';

const AddChild = () => {
	const [formData, setFormData] = useState({
		first_name: '',
		age: '',
        image: '',
	});

	const newChild = {
		first_name: formData.first_name,
		age: formData.age,
        image: formData.image,
	};

	const resetForm = () => {
		setFormData({ first_name: '', age: '', image: '' });
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

    const handleImageChange = (e) => { 
        setFormData({image: e.target.files[0] });
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
					<input
						type="file"
                        accept="image/*"
						name="image"
						placeholder="Upload Image"
						// value={formData.image}
						onChange={handleImageChange}
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
