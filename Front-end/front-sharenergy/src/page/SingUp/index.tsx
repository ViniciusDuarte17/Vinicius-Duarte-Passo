import React from "react";
import * as S from "./styled";
import { Header } from "../../components/Header";
import Logo from "../../assets/dog3.jpg";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { SingUpForm } from "./SingUpForm";
import { Button } from "@mui/material";
import { goToLogin } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

export const SingUpPage: React.FC = () => {
    useUnprotectedPage()
    const navigate = useNavigate();
    return (
        <>
            <Header>
                <Button
                    onClick={()=> goToLogin(navigate)}
                    variant="contained"
                    color="success">
                    Fazer login
                </Button>
            </Header>
            <S.LogoImg src={Logo} />
            <SingUpForm />
        </>
    )
}