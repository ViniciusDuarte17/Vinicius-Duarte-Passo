import React from "react";
import { useState } from "react";
import * as S from "./styled";
import TextField from "@mui/material/TextField";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";

export const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const { form, onChange, clean } = useForm({ name: "", password: "" }); 

    const onSubmitForm = (e: React.ChangeEvent<HTMLInputElement> | any): void => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <S.ContainerLogin>
            <S.LoginForm onSubmit={onSubmitForm}>
                <TextField
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    label={"Nome do usuário"}
                    margin="normal"
                    fullWidth
                    required
                    type={'text'}
                />
                <FormControl margin="normal" fullWidth >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        name="password"
                        placeholder="Minimo 6 caracteres"
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        fullWidth
                        onChange={onChange}
                        required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Entrar
                </Button>
            </S.LoginForm>
        </S.ContainerLogin>
    )
}