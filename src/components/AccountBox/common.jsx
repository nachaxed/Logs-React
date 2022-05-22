import styled from "styled-components"; 

 export const BoxContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px; 
 `;

 export const FormContainer = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
 `;

 export const MutedLink = styled.a `
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
 `;

 export const BoldLink = styled.a `
    font-size:12px;
    color: rgb(80, 229, 167);
    font-weight: 500;
    text-decoration: none;
 `;

 export const Input = styled.input `
    width: 100%;
    height:42px;
    outline: none;
    border: 1px solid rgba( 200, 200, 200, 0.0.3);
    padding: 0 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;

    &::placeholder{
        color: rgba( 200,200, 200, 1);
    }
    &:not(:last-of-type){
        border-bottom:1.5px solid rgba(200, 200, 200, 0.4);
    }
    &:focus{
        outline: none;
        border-bottom: 2px solid rgb(80, 229, 167);
    }
 `;

export const SubmitButton = styled.button `
    width: 100%;
    padding: 11px 40%;
    color: yellow;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(80, 229, 167);
    background: linear-gradient(58deg, rgba(80,229, 167, 1) 20%, rgba(80, 220, 45, 1) 100%);

    &:hover{
        filter: brightness(1.03);
    }
`;