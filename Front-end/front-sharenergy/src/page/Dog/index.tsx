import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header"
import { NavBar } from "../../components/NavBar";
import { requestDog } from "../../services/requestDog";
import { CustomDog } from "./components"
import * as S from "./styled";


export const Dog = () => {
    const [dog, setDog] = useState({});

    useEffect(() => {
        requestDog(setDog)
    }, [])


    return (
        <>
            <Header>
                Dog
            </Header>
            <NavBar />
            <S.ContentDog>
                {
                    <CustomDog
                        setDog={setDog}
                        requestDog={requestDog}
                        dog={dog} />
                }
            </S.ContentDog>
            <S.ButtonRefresh>
                <Button
                    variant="contained"
                    onClick={() => requestDog(setDog)}>
                    refresh
                </Button>
            </S.ButtonRefresh>
        </>
    )
}