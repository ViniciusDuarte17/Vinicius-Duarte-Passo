import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { CardPage } from "../../components/Card";
import { Header } from "../../components/Header";
import { radomUser } from "../../services/radomUser";
import { PaginationControlled } from "../../components/Pagination";
import { NavBar } from "../../components/NavBar";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const Home: React.FC = () => {
    useProtectedPage()
    const [user, setUser] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(10)
    const [query, setQuery] = useState("");

    useEffect(() => {
        radomUser(currentPage, setUser)
    }, [currentPage])

    const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <Header>
                Home
            </Header>
            <NavBar />
            <S.ContentTextField>
                <TextField
                    fullWidth
                    placeholder="pesquisar"
                    value={query}
                    onChange={updateQuery}
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
                    user &&
                    user
                        .filter(user =>
                            user.name.first.toLowerCase().includes(query.toLowerCase()) ||
                            user.name.last.toLowerCase().includes(query.toLowerCase()) ||
                            user.login.username.toLowerCase().includes(query.toLowerCase()) ||
                            user.email.toLowerCase().includes(query.toLowerCase())
                        )
                        .map(user => <CardPage key={user.login.uuid} itemUser={user} />)
                }
            </S.ContentCard>
            <S.CustomPagination>
                <PaginationControlled currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} />
            </S.CustomPagination>
        </>
    )
}