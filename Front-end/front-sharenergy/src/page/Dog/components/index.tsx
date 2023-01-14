import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    dog: any;
    requestDog: any;
    setDog: React.Dispatch<React.SetStateAction<{}>>
}

export const CustomDog = ({dog, setDog, requestDog}: Props) => {
    
    if(dog && dog?.url?.includes('.mp4')) {
        requestDog(setDog)
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            D
                        </Avatar>
                    }
                    title="Cachorrinhos"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={dog?.url}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        imagem de dogs
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}