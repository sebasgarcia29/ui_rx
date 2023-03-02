import { useSelector } from 'react-redux';
import { LocationCity } from '@mui/icons-material';
import {
    CardMedia,
    Grid, Card,
    CardHeader,
    CardContent,
    Avatar,
    IconButton,
    Typography,
} from '@mui/material';
import { RootReducerTypes } from '../redux/RootReducer';


export const CardPatient = () => {

    const { patientSelected } = useSelector((state: RootReducerTypes) => state.patientReducer);

    const imageMale = '../static/male.png'
    const imageFemale = '../static/female.png'

    return (
        <Grid container spacing={2} minHeight={160}>
            <Grid xs={16} display="flex" justifyContent="center" alignItems="center" mt={4} mb={2}>
                <Card sx={{ maxWidth: 500, maxHeight: 1000 }}>
                    <CardHeader
                        fontSize={20}
                        avatar={
                            <Avatar sx={{ bgcolor: '#70C995' }} aria-label="recipe">
                                {patientSelected?.firstName.charAt(0)}
                            </Avatar>
                        }
                        title={patientSelected?.firstName + ' ' + patientSelected?.lastName}
                        subheader={patientSelected?.patientId}
                    />
                    <CardMedia
                        component="img"
                        width="200"
                        height="500"
                        image={patientSelected?.gender.includes('Female') ? imageFemale : imageMale}
                        alt="gender"
                    />
                    <CardContent>

                        <Typography variant="body1" color="text.secondary" alignContent={'center'} alignItems={'center'} fontSize={20}>
                            <IconButton aria-label="add to favorites">
                                <LocationCity />
                            </IconButton>
                            {patientSelected?.city + ' ' + patientSelected?.postalCode}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" alignContent={'center'} alignItems={'center'} fontSize={20}>
                            <IconButton aria-label="add to favorites">
                                <LocationCity />
                            </IconButton>
                            {patientSelected?.dateOfBirth ? new Date(patientSelected?.dateOfBirth).toString() : new Date().toString()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}