import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInForm2 = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("L'email est requis")
				.email("Adresse email non valide"),
			password: Yup.string()
				.required("Mot de passe requis")
				.min(4, "Le mot de passe doit comporter au moins 4 caractères")
                .max(15, "C'est tres long mon pote!"),
		}),
		onSubmit: (values) => {
			console.log("Formulaire ok");
			console.log(values);
            //handler submit 
            handleAuthentication(values);
		},
	});

    const handleAuthentication = async (values) => {
        try {
            const response = await fetch('http://localhost:3000/auth/signin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
            });
            if(response.ok) {
                const { jwt } = await response.json()
                localStorage.setItem('jwt', jwt)
            } else {
                console.error("Authentication failed");
            }
        } catch (error) {
            console.error('Erreur lors de l\'authentification:', error)
        }
    }

	return (
		<div>
			<h3>SignInForm2</h3>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type='email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
                    {formik.touched.email && formik.errors.email ? (
                        <div style={style.red}>{formik.errors.email}</div>
                    ) : null}
				</div>
				<div>
					<label>Mot de passe</label>
					<input
						type='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
                    {formik.touched.password && formik.errors.password ? (
                        <div style={style.red}>{formik.errors.password}</div>
                    ) : null}
				</div>
				<button type='submit'>Me connecter</button>
			</form>
		</div>
	);
};

const style = {
    red: {
        color: "red"
    }
};

export default SignInForm2;