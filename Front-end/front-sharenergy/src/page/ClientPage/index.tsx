import { useEffect, useState } from "react";
import { IClient } from "../../@types/User";
import { Header } from "../../components/Header";
import { requestClient, requestDeleteClient } from "../../services/requestClient";
import { DataTableClient } from "./components/DataTableClient";
import * as S from "./styled";



export const ClientPage = () => {
    const [client, setClient] = useState<IClient[]>([]);
    const [clientDelete, setClientDelete] = useState();
    useEffect(() => {
        requestClient(setClient);
    }, [clientDelete])

    return (
        <S.Container>
            <Header>
                Client
            </Header>
            <S.ContentClient>
                <DataTableClient
                    setClientDelete={setClientDelete}
                    client={client} />
            </S.ContentClient>
        </S.Container>
    )
}