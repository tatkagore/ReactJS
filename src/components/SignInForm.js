import React, { useState, useEffect } from "react";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {});

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit ok");

        const formData = {
            email: email, 
            password: password
        }
        setData(formData);

        console.log("data: ", formData);
    };

	return (
		<div className='signinform'>
			<h3>SignInForm</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>Mot de passe</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button>Me connecter</button>
			</form>
		</div>
	);
};

export default SignInForm;