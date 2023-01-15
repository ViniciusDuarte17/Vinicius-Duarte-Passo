import React from "react";
import * as S from "./styled";
import { Header } from "../../components/Header";
import { LoginForm } from "./LoginForm";
import Logo from "../../assets/dog3.jpg";
import { Button } from "@mui/material";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage: React.FC = () => {
    useUnprotectedPage()
    return (
        <>
            <Header>
                Login
            </Header>
             <S.LogoImg src={Logo}/>
            <LoginForm />
            <S.ContentButtonSignup>
                <Button
                   fullWidth 
                >
                    Não possui cadastro ? Clique aqui.
                </Button>
            </S.ContentButtonSignup>
        </>
    )
}