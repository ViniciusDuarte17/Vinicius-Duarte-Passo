import React from "react";
import { CardPage } from "../../components/Card";
import { Header } from "../../components/Header";
import * as S from "./styled";

export const Home: React.FC = () => {

    return (
        <>
            <Header>
                Home
            </Header>
           <S.ContentCard>
                <CardPage />
           </S.ContentCard>
        </>
    )
}