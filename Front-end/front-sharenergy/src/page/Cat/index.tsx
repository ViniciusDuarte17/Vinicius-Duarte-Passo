import * as S from "./styled"
import { Header } from "../../components/Header"
import { CustomCard } from "./components/CustomCard"
import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import {  useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { NavBar } from "../../components/NavBar";


export const Cat = () => {
    useProtectedPage()
    const [search, setSearch] = useState('');

    const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Header >
                Cat
            </Header>
            <NavBar />
            <S.ContentTextField>
                <TextField
                    fullWidth
                    placeholder="pesquisar"
                    value={search}
                    onChange={updateSearch}
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
            <S.ContentCat>
                <CustomCard search={search} />
            </S.ContentCat>
        </>
    )
}