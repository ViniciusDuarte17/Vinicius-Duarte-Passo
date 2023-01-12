import Button from '@mui/material/Button';
import { ReactNode } from 'react';


interface Props {
    children: ReactNode,
    variant?: 'text' | 'outlined' | 'contained',
    fullWidth?: boolean,
    type: string
}

export const CustomBotton = ({ children, variant }: Props) => {

    return (
        <Button
            fullWidth
            variant={variant}>{children}
        </Button>
    )
}