import styled from 'styled-components';
import { AccountBox } from './components/AccountBox';
import './App.css';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
`;

function App() {
  return <AppContainer>
    <AccountBox />
  </AppContainer>
}

export default App;
