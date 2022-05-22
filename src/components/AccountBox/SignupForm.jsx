import { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./AccountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";



export function SignupForm(props){
    const {switchToSignin} = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">signup</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Signin
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    )


}