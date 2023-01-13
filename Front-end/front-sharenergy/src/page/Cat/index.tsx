import * as S from "./styled"
import { Header } from "../../components/Header"
import { CustomCard } from "./components/CustomCard"
import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { requestCat } from "../../services/requestCat";


export const Cat = () => {
    const [search, setSearch] = useState('404');
    const [cat, setCat] = useState(null);

        requestCat(404)

    const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Header >
                Cat
            </Header>
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
                <CustomCard />
            </S.ContentCat>
        </>
    )
}