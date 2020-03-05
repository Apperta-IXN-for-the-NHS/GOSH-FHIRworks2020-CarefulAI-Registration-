import React, { useState } from 'react';
import Router from 'next/router';
import {Button, Grid, Snackbar, TextField} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ucl_logo from '../resources/img/ucl_logo.png';
import Alert from '../components/main/Alert';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(30),
        marginRight: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Index() {
    const classes = useStyles();
    const [password, changePassword] = useState('');
    const [open, setOpen] = React.useState({ success: false, error: false });

    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ ...open, error: false });
    };

    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ ...open, success: false });
    };

    return (
        <div className={ classes.paper }>
            <Grid container spacing={ 2 } className={ classes.paper }>
                <Grid item xs={ 12 }>
                    <img src={ ucl_logo } />
                </Grid>
                <Grid item xs={ 12 } >
                    <TextField
                        label="Password"
                        helperText="Hint: FHIR"
                        variant="outlined"
                        type="text"
                        value={ password }
                        onChange={ e => changePassword(e.target.value) }
                    />
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={ () => {
                        if (password === 'FHIR') {
                            setOpen({ ...open, success: true });
                            Router.push('/Main');
                        }
                        else setOpen({ ...open, error: true });
                    }}
                >
                    Enter
                </Button>
            </Grid>

            <Snackbar open={open.error} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={ handleErrorClose } severity="error">
                    Wrong password {password}, please try again
                </Alert>
            </Snackbar>
            <Snackbar open={open.success} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={ handleSuccessClose } severity="success">
                    Success!
                </Alert>
            </Snackbar>
        </div>
    );
}
