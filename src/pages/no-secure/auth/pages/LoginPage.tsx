import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import *  as Yup from 'yup';
import { Formik, Form, FormikProps } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { FieldComponent, ButtonComponent } from '../../../../components';
import { IForm } from './Modeluser';
import { checkingAuthentication, startGoogleSingIn } from '../../../../redux/actions/actionsAuth';
import { RootReducerTypes } from '../../../../redux/RootReducer';

const initialData = {
    email: 'sebasuchiha29.sg@gmail.com',
    password: '123456'
}

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { status } = useSelector((state: RootReducerTypes) => state.authReducer);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);


    const onSubmit = (values: IForm) => {
        console.log({ values })
        dispatch(checkingAuthentication());
    }

    const onGoogleSingIn = (values: IForm) => {
        console.log('onGoogleSingIn', { values })
        dispatch(startGoogleSingIn());
    }

    return (
        <AuthLayout title="Login">
            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={Yup.object({
                    email: Yup.string().required('The email is required'),
                    password: Yup.string().required('This password is required'),
                })}
            >
                {(formikProps: FormikProps<IForm>) => (
                    <Form>
                        <Grid container>
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
                                <ButtonComponent
                                    onClick={() => console.log('Login')}
                                    disabled={isAuthenticating}
                                >
                                    {'Login'}
                                </ButtonComponent>
                                <ButtonComponent
                                    onClick={() => onGoogleSingIn(formikProps.values)}
                                    disabled={isAuthenticating}
                                    type='button'
                                >
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>{'Google'}</Typography>
                                </ButtonComponent>

                            </Grid>


                            <Grid container direction='row' justifyContent='end'>
                                <Link component={RouterLink} color='inherit' to="/auth/register">
                                    {'Crear una cuenta'}
                                </Link>
                            </Grid>

                        </Grid>
                    </Form>

                )}


            </Formik>

        </AuthLayout>
    )
}