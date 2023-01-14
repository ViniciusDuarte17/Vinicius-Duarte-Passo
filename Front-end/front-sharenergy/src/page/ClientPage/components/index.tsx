import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IClient } from '../../../@types/User';
import { TableBody } from '@mui/material';


interface Props {
    client: IClient[]
}

export const DataTableClient = ({ client }: Props) => {
    console.log(client)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        {/* <TableCell align="right">Nome</TableCell> */}
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Telefone</TableCell>
                        <TableCell align="right">Endereço</TableCell>
                        <TableCell align="right">CPF</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {client.map((client) => (
                        <TableRow
                            key={client.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {client.name}
                            </TableCell>
                            <TableCell align="right">{client.email}</TableCell>
                            <TableCell align="right">{client.phone}</TableCell>
                            <TableCell align="right">{client.address}</TableCell>
                            <TableCell align="right">{client.cpf}</TableCell>
                            <TableCell
                                onClick={() => console.log(client.id)}
                                align="right">{"Deletar usuário"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}