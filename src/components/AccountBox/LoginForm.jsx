import {useState} from "react";
import {
	BoxContainer,
	FormContainer,
	MutedLink,
	SubmitButton,
	Input,
} from "./common";
// import {Marginer} from "../marginer";

export function LoginForm() {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.values(data).includes("")) {
			alert("Todos los campos son obligatorios");
			return;
		}

		localStorage.setItem("usuario", JSON.stringify(data));
	};

	return (
		<BoxContainer>
			<FormContainer onSubmit={handleSubmit}>
				<Input
					name="email"
					type="email"
					value={data.email}
					placeholder="Email"
					onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
				/>
				<Input
					name="password"
					type="password"
					value={data.password}
					placeholder="Password"
					onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
				/>
				<SubmitButton type="submit">Signin</SubmitButton>
			</FormContainer>
			{/* <Marginer direction="vertical" margin={10} /> */}
			<MutedLink href="#">Forget your password?</MutedLink>
			{/* <Marginer direction="vertical" margin="1em" /> */}
		</BoxContainer>
	);
}
