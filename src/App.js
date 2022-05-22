import styled from "styled-components";
// import {AccountBox} from "./components/AccountBox";
import "./App.css";
import {LoginForm} from "./components/AccountBox/LoginForm";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<AppContainer>
      <LoginForm />
      {/* <h1>Hola</h1> */}
			{/* <AccountBox /> */}
		</AppContainer>
	);
}

export default App;
