import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { CardPage } from "../../components/Card";
import { Header } from "../../components/Header";
import { radomUser } from "../../services/radomUser";

export const Home: React.FC = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(10)

    useEffect(() => {
        radomUser(currentPage, setUser, setError)
    }, [currentPage])

    return (
        <>
            <Header>
                Home
            </Header>
            <S.ContentTextField>
                <TextField
                    fullWidth
                    placeholder="Restaurante"
                    // value={query}
                    // onChange={updateQuery}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </S.ContentTextField>
            <S.ContentCard>
                {
                    user && user.map(user => <CardPage key={user} itemUser={user}/>)
                }
            </S.ContentCard>
        </>
    )
}