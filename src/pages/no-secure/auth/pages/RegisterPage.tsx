import { useMemo } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Grid, Link, Typography } from '@mui/material';
import *  as Yup from 'yup';

// import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { ButtonComponent, FieldComponent } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../../../redux/actions/actionsAuth';
import { RootReducerTypes } from '../../../../redux/RootReducer';

export interface InterfaceInitialData {
    name: string;
    email: string;
    password: string;
}

export const RegisterPage = () => {

    const { errorMessage, status } = useSelector((state: RootReducerTypes) => state.authReducer);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const dispatch = useDispatch();

    const createNewAccount = (values: InterfaceInitialData) => {
        dispatch(startCreatingUserWithEmailAndPassword({
            email: values.email,
            password: values.password,
            name: values.name
        }));
    }

    return (
        <AuthLayout title="Crear cuenta">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => createNewAccount(values)}
                validationSchema={Yup.object({
                    name: Yup.string().required('The name is required'),
                    email: Yup.string().required('The email is required').email('The email is not valid'),
                    password: Yup.string().required('This password is required'),
                }
                )}
            >
                {(formikProps: FormikProps<InterfaceInitialData>) => (
                    <Form>
                        <Grid container>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <FieldComponent
                                    label="name"
                                    type="name"
                                    placeholder='Enter your name'
                                    value={formikProps.values.name}
                                    onChange={formikProps.setFieldValue}
                                    errors={formikProps.errors.name}
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <FieldComponent
                                    label="email"
                                    type="email"
                                    placeholder='Enter your email'
                                    value={formikProps.values.email}
                                    onChange={formikProps.setFieldValue}
                                    errors={formikProps.errors.email}
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <FieldComponent
                                    label="password"
                                    type="password"
                                    placeholder='Enter your password'
                                    value={formikProps.values.password}
                                    onChange={formikProps.setFieldValue}
                                    errors={formikProps.errors.password}
                                />
                            </Grid>



                            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                                <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                                    <Alert severity='error'>{errorMessage}</Alert>
                                </Grid>

                                <Grid item xs={12}>
                                    <ButtonComponent
                                        onClick={() => undefined}
                                        type='submit'
                                        disabled={isAuthenticating}
                                    >
                                        {'Login'}
                                    </ButtonComponent>
                                </Grid>
                            </Grid>


                            <Grid container direction='row' justifyContent='end'>
                                <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                                <Link component={RouterLink} color='inherit' to="/auth/login">
                                    ingresar
                                </Link>
                            </Grid>

                        </Grid>
                    </Form>
                )}


            </Formik>

        </AuthLayout >
    )
}