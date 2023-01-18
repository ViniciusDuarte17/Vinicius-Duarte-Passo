import * as S from "./styled";
import { Header } from "../../../components/Header"
import { Alert, AlertTitle, Button } from "@mui/material";
import { goToClient } from "../../../router/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { ClientForm } from "../components/ClientForm";
import { useForm } from "../../../hooks/useForm";
import { requestUpdateClient } from "../../../services/requestClient";
import { useState } from "react";



export const PageUpdateClient = () => {
    useProtectedPage();
    const navigate = useNavigate();
    const params = useParams();
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false);

    const { form, onChange, clean } = useForm({
        name: "",
        email: "",
        phone: 0,
        address: "",
        cpf: ""
    });

    const onSubmitClientForm = (e: React.ChangeEvent<HTMLInputElement> | any): void => {
        e.preventDefault();
        const id = params.id as string;
        requestUpdateClient(id, form, navigate, setAlertSuccess);
        clean();
    }


    return (
        <>
            <Header>
                <Button
                    onClick={() => goToClient(navigate)}
                    variant="contained"
                    color="secondary"
                >
                    Voltar
                </Button>

            </Header>
            {
                alertSuccess === true ?
                    <Alert variant="filled" severity="success">
                        <AlertTitle>Sucesso</AlertTitle>
                        Cliente atualizado com <strong>sucesso!</strong>
                    </Alert> : null
            }
            <S.ClientMain>
                <ClientForm
                    form={form}
                    onChange={onChange}
                    onSubmitClientForm={onSubmitClientForm}
                />
            </S.ClientMain>
        </>
    )
}