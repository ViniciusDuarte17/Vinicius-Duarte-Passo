import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as S from "./styled";


interface Props {
  itemUser: any
}

export const CardPage = ({ itemUser }: Props) => {
  
  return (
    <S.Container>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="194"
          image={itemUser.picture.large}
          alt="Logo restaurante"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p><strong>Nome completo:</strong> {itemUser.name.first} {itemUser.name.last}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p><strong>username: </strong>{itemUser.login.username}</p>
            <p><strong>Idade:</strong> {itemUser.dob.age} anos</p>
            <p><strong>Email:</strong> {itemUser.email}</p>
          </Typography>
        </CardContent>
      </Card>
    </S.Container>
  );
}