import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { IClient } from "../../@types/User";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { requestAddClient, requestClient } from "../../services/requestClient";
import { ClientForm } from "./components/ClientForm";
import { DataTableClient } from "./components/DataTableClient";
import * as S from "./styled";



export const ClientPage = () => {
    useProtectedPage()
    const [client, setClient] = useState<IClient[]>([]);
    const [clientDelete, setClientDelete] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [errorCreateClient, setErrorCreateClient] = useState('');
    const [formAddClient, setFormAddClient] = useState<boolean>(false);
    const [messageAddClient, setMessageAddClient] = useState('')
    

    const { form, onChange, clean } = useForm({
        name: "",
        email: "",
        phone: 0,
        address: "",
        cpf: ""
    });


    useEffect(() => {
        requestClient(setClient, setErrorMessage);
    }, [clientDelete, messageAddClient, formAddClient, errorCreateClient])

    const onSubmitClientForm = (e: React.ChangeEvent<HTMLInputElement> | any): void => {
        e.preventDefault();
        setMessageAddClient('')
        requestAddClient(form, setMessageAddClient , setErrorCreateClient, clean);
    }

    return (
        <S.Container>
            <Header>
                Client
            </Header>
            <NavBar />
            <S.ContentClient>
                <DataTableClient
                    errorMessage={errorMessage}
                    setClientDelete={setClientDelete}
                    client={client} />
            </S.ContentClient>
            <>
                <Button
                    onClick={() => setFormAddClient(!formAddClient)}
                >
                    {
                        formAddClient === true ?
                            'Remover formulário' : 'Adicionar formuário'
                    }
                </Button>
            </>
            {formAddClient === true ?
                <S.FormClient>
                    <ClientForm
                        form={form}
                        onChange={onChange}
                        onSubmitClientForm={onSubmitClientForm}
                    />
                </S.FormClient>
                : null}
        </S.Container>
    )
}