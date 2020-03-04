import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    Divider,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Derrick Macakiage 18011989 CarefulAI FHIR Hackathon 2020
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

export default function PatientInfoForm(props) {
    const classes = useStyles();
    const patientInfo = props.patient;
    const [basicInfo, changeInfo] = useState({
        name: patientInfo.name[0].given[0],
        sex: '',
        phone: patientInfo.telecom[0].value,
        region: patientInfo.address[0].state
    });

    const [contact, changeContact] = useState({
        firstContact : {
            name: '',
            phone: ''
        },
        secondContact : {
            name: '',
            phone: ''
        },
        thirdContact : {
            name: '',
            phone: ''
        }
    });

    const [activity, changeActivity] = useState({
        firstActivity: '',
        secondActivity: '',
        thirdActivity: ''
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Basic Info (Should be autofilled)
                </Typography>
                <Grid container spacing={ 2 } style={{ marginTop: 20 }}>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }} >
                           <TextField
                               disabled={ true }
                               label="First Name"
                               variant="outlined"
                               type="text"
                               value={ basicInfo.name }
                               onChange={ e => {
                                   changeInfo({ ...basicInfo, name: e.target.value })
                               }}
                           />
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            disabled={ true }
                            label="Your Phone Number"
                            variant="outlined"
                            type="text"
                            value={ basicInfo.phone }
                            onChange={ e => changeInfo({...basicInfo, phone: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            disabled={ true }
                            label="State/Region"
                            variant="outlined"
                            type="text"
                            value={ basicInfo.region }
                            onChange={ e => changeInfo({ ...basicInfo, region: e.target.value })}
                        />
                    </Grid>
                </Grid>

                <Typography component="h1" variant="h5" style={ { marginTop: 30, marginBottom: 10 }}>
                    Primary Contact Info
                </Typography>
                <Grid container spacing={ 2 } style={{ marginTop: 20 }}>
                    <Grid item xs={ 12 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <Typography component="h1" variant="overline">
                            First Contact
                        </Typography>
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }} >
                        <TextField
                            label="First Name"
                            variant="outlined"
                            type="text"
                            value={ contact.firstContact.name }
                            onChange={ e => {
                                changeContact({ ...contact, firstContact: { ...contact.firstContact, name: e.target.value } })
                            }}
                        />
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            value={ contact.firstContact.phone }
                            onChange={ e => changeContact({ ...contact, firstContact: { ...contact.firstContact, phone: e.target.value }}) }
                        />
                    </Grid>

                    <Divider />

                    <Grid item xs={ 12 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <Typography component="h1" variant="overline">
                            Second Contact
                        </Typography>
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }} >
                        <TextField
                            label="First Name"
                            variant="outlined"
                            type="text"
                            value={ contact.secondContact.name }
                            onChange={ e => {
                                changeContact({ ...contact, secondContact: { ...contact.secondContact, name: e.target.value } })
                            }}
                        />
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            value={ contact.secondContact.phone }
                            onChange={ e => changeContact({ ...contact, secondContact: { ...contact.secondContact, phone: e.target.value }}) }
                        />
                    </Grid>

                    <Divider />

                    <Grid item xs={ 12 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <Typography component="h1" variant="overline">
                            Third Contact
                        </Typography>
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }} >
                        <TextField
                            label="First Name"
                            variant="outlined"
                            type="text"
                            value={ contact.thirdContact.name }
                            onChange={ e => {
                                changeContact({ ...contact, thirdContact: { ...contact.thirdContact, name: e.target.value } })
                            }}
                        />
                    </Grid>
                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            value={ contact.thirdContact.phone }
                            onChange={ e => changeContact({ ...contact, thirdContact: { ...contact.thirdContact, phone: e.target.value }}) }
                        />
                    </Grid>
                </Grid>

                <Typography component="h1" variant="h5" style={ { marginTop: 30, marginBottom: 10 }}>
                    Activity Info
                </Typography>
                <Grid container spacing={ 2 } style={{ marginTop: 20 }}>
                    <Grid item xs={ 4 } style={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            label="First Activity"
                            variant="outlined"
                            type="text"
                            value={ activity.firstActivity }
                            onChange={ e => {
                                changeActivity({ ...activity, firstActivity: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={ 4 } style={{ marginTop: 2, marginBottom: 2 }} >
                        <TextField
                            label="Second Activity"
                            variant="outlined"
                            type="text"
                            value={ activity.secondActivity }
                            onChange={ e => {
                                changeActivity({ ...activity, secondActivity: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={ 4 } style={{ marginTop: 2, marginBottom: 2 }} >
                        <TextField
                            label="Third Activity"
                            variant="outlined"
                            type="text"
                            value={ activity.thirdActivity }
                            onChange={ e => {
                                changeActivity({ ...activity, thirdActivity: e.target.value })
                            }}
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    type="submit"
                    style={{ marginTop: 20 }}
                >
                    Submit
                </Button>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
