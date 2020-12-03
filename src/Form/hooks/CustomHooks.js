import { useState } from 'react';

const isInvalid = {
    firstName: (value) => value.length < 2,
    lastName: (value) => value.length <2,
    email: (value) => value.length <4,
    password1 : (value) => value.length < 6,
    password2 : (value) => value.length < 6
};

/*
    In order to use validation you need to provice an object with a validating function for every property
*/

const useSignupForm = () => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});

	const handleSubmit = (event, callback) => {
		event.preventDefault();
		callback();
	};

	const handleInputChange = event => {
        const {name, value} = event.target;

		setInputs(prevInputs => {
			return {
				...prevInputs,
				[name] : value
			};
		});

		setErrors(prevErrors => {
			return {
                ...prevErrors,
				[name]: isInvalid[name](value),
			};
		});
	};

	return {
		handleSubmit,
        handleInputChange,
        errors,
		inputs,
	};
};

export default useSignupForm;
