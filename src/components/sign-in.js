import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles({


})



export const SignIn = (props) => {

    const gender = [
        {
            value: "Male",
            label: "Male"
        },

        {
            value: "Female",
            label: "Female"
        }
    ];

    const classes = useStyles();






    //All the logic starts here
    let { handleRegSubmit, handleRegChange, userRegDetails, handleSignUsername, handleSignSubmit,
        info, signUser, signPassword, handleSignPassword } = props;


    return (
        <>

            <Grid container >
                <Grid item xs={12} md={6} className="bg-primary text-center text-white grid-1">
                    <h3 style={{ fontWeight: "1000" }}>Welcome Back!</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur  <br />  adipiscing elit, sed do eiusmod tempor incididunt  <br /> ut
                    labore et dolore magna aliqua. </p>



                    <form className="mt-4 mx-auto mLoginForm" style={{ width: "300px" }} onSubmit={handleSignSubmit}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth label="Username" value={signUser} onChange={handleSignUsername} type="text" margin="dense" variant="outlined" className="shadow" />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField fullWidth label="Password" value={signPassword} onChange={handleSignPassword} type="password" margin="dense" variant="outlined" className="shadow" />
                            </Grid>
                        </Grid>

                        <Button type="submit" variant="contained" color="primary" endIcon={<ArrowForwardIcon />} size="medium" className="btn text-white mt-4">SIGN IN </Button>
                    </form>
                    <div className="text-center text-white mt-2 ">{info}</div>

                </Grid>




                <Grid item xs={12} md={6} className="text-center grid-2">
                    <Link to="/dashboard"><p className=" mr-3 text-right text-info">Go to Dashbboard <ArrowForwardIcon /> </p></Link>
                    <div className="mt-5 pr-5 pl-5">
                        <h3 style={{ fontWeight: "1000" }} className="text-primary">Create Account</h3>
                        <p> Sign up here if you dont have an Account</p>

                        <form onSubmit={handleRegSubmit}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6} >
                                    <TextField fullWidth type="text" label="Firstname" name="firstname" value={userRegDetails.firstname} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth type="text" label="Lastname" name="lastname" value={userRegDetails.lastname} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        select
                                        label="Gender" fullWidth type="text" margin="dense" variant="outlined" className="bg-light text-left"
                                        name="gender" value={userRegDetails.gender} onChange={handleRegChange}
                                    >
                                        {gender.map((option) => (
                                            <MenuItem className="text-left" key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth type="number" label="Phone number" name="phone" value={userRegDetails.phone} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField fullWidth type="email" label="Email Address" name="email" value={userRegDetails.email} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField fullWidth type="text" label="Username" name="username" value={userRegDetails.username} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth type="password" label="Password" name="password" value={userRegDetails.password} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth type="password" label="Confirm Password" name="cPassword" value={userRegDetails.cPassword} onChange={handleRegChange} margin="dense" variant="outlined" className="bg-light" />
                                </Grid>
                            </Grid>

                            <Button variant="contained" type="submit" color="primary" size="large" endIcon={<ArrowForwardIcon />} className="mt-4 btn text-white pr-5 pl-5"> SIGN UP </Button>

                        </form>
                    </div>
                </Grid>
            </Grid>

        </>
    );
}