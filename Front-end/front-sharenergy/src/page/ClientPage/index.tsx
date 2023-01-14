import { useEffect, useState } from "react";
import { IClient } from "../../@types/User";
import { Header } from "../../components/Header";
import { requestClient } from "../../services/requestClient";
import { DataTableClient } from "./components/DataTableClient";
import * as S from "./styled";



export const ClientPage = () => {
    const [client, setClient] = useState<IClient[]>([]);
    const [clientDelete, setClientDelete] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        requestClient(setClient, setClientDelete, setErrorMessage);
    }, [clientDelete, errorMessage])

    return (
        <S.Container>
            <Header>
                Client
            </Header>
            <S.ContentClient>
                <DataTableClient
                    errorMessage={errorMessage}
                    setClientDelete={setClientDelete}
                    client={client} />
            </S.ContentClient>
        </S.Container>
    )
}