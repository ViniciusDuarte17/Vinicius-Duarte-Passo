import React from "react";
import * as S from "./styled";
import { Header } from "../../components/Header";
import { LoginForm } from "./LoginForm";
import Logo from "../../assets/dog3.jpg";
import { Button } from "@mui/material";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { goToSingUp } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
        <>
            <Header>
                Login
            </Header>
             <S.LogoImg src={Logo}/>
            <LoginForm />
            <S.ContentButtonSignup>
                <Button
                   onClick={() => goToSingUp(navigate)} 
                   fullWidth 
                >
                    Não possui cadastro ? Clique aqui.
                </Button>
            </S.ContentButtonSignup>
        </>
    )
}