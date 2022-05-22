import { useContext, useState } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext} from "./AccountContext";


export function LoginForm(props){
    const {switchToSignUp} = useContext(AccountContext);

    const [data, setData] = useState({
        email: " ",
        password: "",
    })  

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.values(data).includes('')){
            alert("Please enter your email or password");
            return;
        } 
        localStorage.setItem("usuario", JSON.stringify(data))
    }

    return( 
        <BoxContainer>
         <FormContainer onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} />
            <Input name="password" type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} />
         </FormContainer>
            <Marginer direction="vertical" margin={10} /> 
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Sign in</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">Don`t have an account?{""}<BoldLink href="#" onClick={switchToSignUp}>Sign up</BoldLink></MutedLink>
    </BoxContainer>
    );
}