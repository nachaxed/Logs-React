import React from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
 

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 9px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15 ,15, 0.28);
    position: relative;
    overflow: hidden;
    margin: auto;
 `;
const TopContainer = styled.div`
    width: 100%;
    height:250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;
const BackDrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display:flex;
    flex-direction: column;
    border-radius: 55%;
    top: -290px;
    left: -70px;
    transform: rotate(60deg);
    background: rgb(80, 229, 167);
    background: linear-gradient(58deg, rgba(80,229, 167, 1) 20%, rgba(80, 220, 45, 1) 100%);
`;
 const HeaderContainer = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
 `;
 const HeaderText = styled.h2`
    font-size: 30px;
    line-height: 600;
    line-height: 1.24;
    color: black;
    -webkit-text-stroke: black 0.1px;
    z-index: 10;
    margin: 0;
 `;

 const SmallText = styled.h5`
    color: black;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin:0;
    margin-top: 7px;
 `;

const InnerContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    paddding: 0 1.8em;
 `;

export function AccountBox(props) {
    return( 
    <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText>Welcome Back!</HeaderText>
                <HeaderText>Hackers</HeaderText>
                <SmallText>Please sign-in to continue</SmallText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm />
        </InnerContainer>
    </BoxContainer>
    );
}