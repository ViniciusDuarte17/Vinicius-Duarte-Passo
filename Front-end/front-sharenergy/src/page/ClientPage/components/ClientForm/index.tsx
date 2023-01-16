import { Button, TextField } from "@mui/material";
import { MaskCpf } from "../../../../components/MaskCpf";
import * as S from "./styled";

interface Props {
    form: any,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmitClientForm: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
}

export const ClientForm = ({ form, onChange, onSubmitClientForm }: Props) => {
    
    return (
        <S.Container>
            <S.ContentForm onSubmit={onSubmitClientForm}>
                <TextField
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    margin="normal"
                    label={"nome"}
                    required
                    type={'text'}
                    inputProps={{ pattern: '^.{3,}' }}
                    title={"Deve conter no mímino 3 letras"}
                />
                <TextField
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    margin="normal"
                    label={"E-mail"}
                    required
                    type={'email'}
                    title={"Compo obrigatório"}
                />
                <TextField
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    margin="normal"
                    label={"Telefone"}
                    required
                    type={'number'}
                />
                <TextField
                    name="address"
                    value={form.address}
                    onChange={onChange}
                    margin="normal"
                    label={"Endereço"}
                    required
                    type={'text'}
                />
                <TextField
                    name="cpf"
                    value={MaskCpf(form.cpf)}
                    onChange={onChange}
                    margin="normal"
                    label={"CPF"}
                    required
                />
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Confirma
                </Button>
            </S.ContentForm>
        </S.Container>
    )
}