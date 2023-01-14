import { useEffect, useState } from "react";
import { IClient } from "../../@types/User";
import { Header } from "../../components/Header";
import { requestClient } from "../../services/requestClient";
import { DataTableClient } from "./components";
import * as S from "./styled";



export const ClientPage = () => {
    const [client, setClient] = useState<IClient[]>([]);

    useEffect(() => {
        requestClient(setClient);
    }, [])

    return (
        <S.Container>
            <Header>
                Client
            </Header>
            <S.ContentClient>
                <DataTableClient client={client} />
            </S.ContentClient>
        </S.Container>
    )
}