import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IClient } from '../../../../@types/User';
import { TableBody } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { requestDeleteClient } from '../../../../services/requestClient';
import { useEffect, useState } from 'react';


interface Props {
    client: IClient[];
    errorMessage: string;
    setClientDelete: React.Dispatch<React.SetStateAction<undefined>>
}

export const DataTableClient = ({ client, setClientDelete, errorMessage }: Props) => {

    const deleteClient = (id: string) => {
        
        if (client.length - 1 <= 0) {
            alert("Todos clientes foram deletados")
            window.location.reload()
        }
        requestDeleteClient(id, setClientDelete)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Telefone</TableCell>
                        <TableCell align="right">Endereço</TableCell>
                        <TableCell align="right">CPF</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {client.length  > 0 ? client && client.map((client) => (
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
                                onClick={() => deleteClient(client.id)}
                                align="right">
                                <Button color="error">
                                    <DeleteForeverRoundedIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )) : <TableCell component="th" scope="row">
                        {errorMessage}
                    </TableCell>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}