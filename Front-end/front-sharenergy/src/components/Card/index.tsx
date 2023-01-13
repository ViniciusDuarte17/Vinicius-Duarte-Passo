import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as S from "./styled";

export const CardPage: React.FC = () => {
  return (
    <S.Container>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="194"
          image={"https://randomuser.me/api/portraits/women/84.jpg"}
          alt="Logo restaurante"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p><strong>userName:</strong> yellowfrog883</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p><strong>Nome completo:</strong> Mélissa Fleury</p>
            <p><strong>Idade:</strong> 23 anos</p>
            <p><strong>Email:</strong> melissa.fleury@example.com</p>
          </Typography>
        </CardContent>
      </Card>
    </S.Container>
  );
}