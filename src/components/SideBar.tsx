import { useEffect } from 'react';
import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import { Person } from '@mui/icons-material';
import { getPatiens } from '../client/client';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients, setPatient } from '../redux/actions';
import { RootReducerTypes } from '../redux/RootReducer';
import { ModelPatients } from '../models';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { patients } = useSelector((state: RootReducerTypes) => state.patientReducer);
    const { uid } = useSelector((state: RootReducerTypes) => state.authReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        getDataPatients();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataPatients = async () => {
        try {
            const response = await getPatiens(uid!);
            // const response = await getPatiens();
            dispatch(getPatients(response))
        } catch (error) {
            console.log('error>>>>', error)
        }
    }

    const selectPatient = (patient: ModelPatients) => {
        dispatch(setPatient(patient));
    }

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer variant='permanent' open
                sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {'Patient view'}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        patients?.map(patient => (
                            <ListItem key={patient.patientId} disablePadding onClick={() => selectPatient(patient)}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Person />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={patient.firstName + ' ' + patient.lastName} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}