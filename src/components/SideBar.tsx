import { useState, useEffect } from 'react';
import axios from 'axios';
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
import { ModelPatients } from '../models/';

export const SideBar = ({ drawerWidth = 240 }) => {


    const [patients, setPatients] = useState<ModelPatients[]>()

    useEffect(() => {
        getDataPatients();
    }, [])

    const getDataPatients = async () => {
        const endpoint = 'https://localhost:7126/api/patients/';
        try {
            const response = await axios.get(endpoint)
            setPatients(response.data)
        } catch (error) {
            console.error('error>>>>', error)
        }
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
                            <ListItem key={patient.patientId} disablePadding onClick={() => console.log({ patient })}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Person />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={patient.firstName + ' ' + patient.lastName} />
                                        <ListItemText secondary={patient.city + patient.postalCode} />
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