import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Developed by'}
            <Link color="inherit" href="/">
                Derrick Macakiage for CarefulAI FHIR Hackathon 2020
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
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

export default function WelcomeForm(props) {
    const classes = useStyles();
    const [info, setInfo] = useState({ name: '', date: ''});

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h3">
                    Welcome To CarefulAI for FHIR
                </Typography>
                    <Grid container spacing={ 2 } style={{ marginTop: 20 }}>
                        <Grid item xs={ 12 } style={{ marginTop: 2, marginBottom: 2 }}>
                            <TextField
                                label=""
                                variant="outlined"
                                type="text"
                                helperText="Your First Name"
                                value={ info.name }
                                onChange={ e => {
                                    setInfo({ ...info, name: e.target.value })
                                }}
                            />
                        </Grid>
                        <Grid item xs={ 12 } style={{ marginTop: 2, marginBottom: 2 }}>
                            <TextField
                                label=""
                                variant="outlined"
                                type="date"
                                helperText="Your Date of Birth"
                                value={ info.date }
                                onChange={ e => {
                                    setInfo({ ...info, date: e.target.value })
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        onClick={ () => props.onClick(info) }
                        style={{ marginTop: 20, marginBottom: 20 }}
                    >
                        SEARCH
                    </Button>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
