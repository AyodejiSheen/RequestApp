import React from 'react';
import { Navbar } from './Navbar';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';



export const Dashboard = (props) => {


let {check} = props;


let history = useNavigate();

const rout = () => {
    history("personal-request");
  }


    return (
        <>
            <div className="text-center bg-dark page-title mx-auto mt-4 p-2">
                <p className="lead  text-white mb-0 ">DASHBOARD</p>
            </div>


            <Grid container spacing={3}>

                <Grid item xs={12} md={6} className="p-5">
                    <Link to="make-request" style={{ textDecoration: "none" }}>
                        <div class="card shadow card-1 pt-3 pb-3 ">
                            <div class="card-img-top text-center ">
                                <AccountCircle style={{ fontSize: "120px" }} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center text-primary" style={{ textDecoration: "none" }}>MAKE REQUEST</h5>
                            </div>
                        </div>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} className="p-5 ">
                    <Link to="available-request" style={{ textDecoration: "none" }}>
                        <div class="card shadow card-1 pt-3 pb-3 ">
                            <div class="card-img-top text-center">
                                <AccountCircle style={{ fontSize: "120px" }} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center text-primary">REQUESTS</h5>
                            </div>
                        </div>
                    </Link>
                </Grid>


                <Grid item xs={12} md={6} className="p-5">
                    <Link to="accepted-request" style={{ textDecoration: "none" }}>
                        <div class="card shadow card-1 pt-3 pb-3">
                            <div class="card-img-top text-center">
                                <AccountCircle style={{ fontSize: "120px" }} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center text-primary">YOUR ACCEPTED REQUEST</h5>
                            </div>
                        </div>
                    </Link>
                </Grid>


                <Grid item xs={12} md={6} className="p-5" onMouseOver={check} onClick={rout}>
                    
                        <div class="card shadow card-1 pt-3 pb-3"  >
                            <div class="card-img-top text-center">
                                <AccountCircle style={{ fontSize: "120px" }} className="text-primary" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center text-primary">YOUR PERSONAL REQUEST</h5>
                            </div>
                        </div>

                </Grid>



            </Grid>
        </>
    )
}




