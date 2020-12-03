import React from 'react';
import useSignupForm from './hooks/CustomHooks';
import './Form.css';

const Form = () => {
	const doSignup = () => {
		alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`);
	};

	const { inputs, errors, handleInputChange, handleSubmit } = useSignupForm(
		doSignup
	);


	const { firstName, lastName, email, password1 } = inputs;

	return (
		<main>
			<form className="Form" onSubmit={e => handleSubmit(e, doSignup)}>
				<div className={errors.firstName ? 'invalid' : null}>
						
					<label>First Name</label>
					<input
						type="text"
						name="firstName"
						onChange={handleInputChange}
						value={inputs.firstName || ""}
						required
					/>
					<label>Last Name</label>
					<input
						type="text"
						name="lastName"
						onChange={handleInputChange}
						value={inputs.lastName || ""}
						required
					/>
				</div>
				<div>
					<label>Email Address</label>
					<input
						type="email"
						name="email"
						onChange={handleInputChange}
						value={inputs.email || ""}
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						name="password1"
						onChange={handleInputChange}
						value={inputs.password1 || ""}
					/>
				</div>
				<div>
					<label>Re-enter Password</label>
					<input
						type="password"
						name="password2"
						onChange={handleInputChange}
						value={inputs.password2 || ""}
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>

			<article className="state">
				<h2>Inputs</h2>
				<p>First name: {firstName}</p>
				<p>Last name: {lastName}</p>
				<p>Email: {email}</p>
				<p>Password: {password1}</p>
			</article>

			<article className="state">
				<h2>Errors</h2>
				<p>First name: {`${errors.firstName}`}</p>
				<p>Last name: {`${errors.lastName}`}</p>
				<p>Email: {`${errors.email}`}</p>
				<p>Password: {`${errors.password1}`}</p>
			</article>
		</main>
	);
};

export default Form;
