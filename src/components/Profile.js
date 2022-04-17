import React, { useState } from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';


//For EDIT dialog box
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export const Profile = (props) => {

    //For EDIT dialog box
    //For EDIT dialog box
    //For EDIT dialog box
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setnewdetails(usersdetailsback[UserLogId]);
    };

    const handleClose = () => {
        setOpen(false);
        usersdetailsback[UserLogId] = newdetails;
        let details = JSON.stringify(usersdetailsback);
        localStorage.setItem('usersDetails', details);
        console.log(usersdetailsback[UserLogId])
    };

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

    //For EDIT dialog box
    //For EDIT dialog box
    //For EDIT dialog box





    // for Logics
    // for Logics
    // for Logics
    // for Logics

    let detailsback = localStorage.getItem('usersDetails');
    let usersdetailsback = JSON.parse(detailsback);

    const [newdetails, setnewdetails] = useState({})

    let {UserLogId} = props;


    const handleEditChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setnewdetails({...newdetails, [name] : value});
    }
    



    return (
        <>
            <div className="text-center bg-dark page-title mx-auto mt-4 p-2">
                <p className="lead  text-white mb-0 ">MY PROFILE</p>
            </div>

        
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 text-center shadow mt-1 pt-5">
                        <div className="p-dp">
                            <AccountCircle style={{ fontSize: "180px", color:"#3f51b5" }} />
                        </div>

                        <p className="display-4 font-weight-bold mt-4 full-name"> {usersdetailsback[UserLogId].firstname.toUpperCase()}  {usersdetailsback[UserLogId].lastname.toUpperCase()}</p>

                    </div>


                    <div className="text-right edit-button-phone-block">
                        <Button variant="contained" type="submit" color="primary" size="large" className=" p-3 shadowbtn btn text-white edit-button-phone"> <EditIcon /> </Button>
                    </div>

                    <div className="col-sm-12 col-md-6 mt-5 p-5 profile-section-2">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 shadow user-details">
                                <label className="profile-title mt-1 ">USERNAME</label>
                                <p className="profile-details text-right">{usersdetailsback[UserLogId].username}</p>
                            </div>

                            <div className="ml-2 col-md-5 col-sm-12 shadow user-details">
                                <label className="profile-title mt-1">GENDER</label>
                                <p className="profile-details text-right">{usersdetailsback[UserLogId].gender}</p>
                            </div>
                        </div>

                        <div className="row mt-5 profile-section-2-1">
                            <div className="col-md-6 col-sm-12 shadow user-details">
                                <label className="profile-title mt-1 ">EMAIL ADDRESS</label>
                                <p className="profile-details text-right email-width">{usersdetailsback[UserLogId].email}</p>
                            </div>

                            <div className="ml-2 col-md-5 col-sm-12 shadow user-details">
                                <label className="profile-title mt-1">PHONE NUMBER</label>
                                <p className="profile-details text-right">{usersdetailsback[UserLogId].phone}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <Button variant="contained" type="submit" color="primary" size="large" className=" p-3 shadow btn text-white edit-button" onClick={handleClickOpen}> <EditIcon /> </Button>
                        </div>
                    </div>
                </div>

            </div>


            {/* Edit profile Section */}
            {/* Edit profile Section */}
            {/* Edit profile Section */}
            {/* Edit profile Section */}

            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit your Profile</DialogTitle>
                    <DialogContent>

                        <Grid container spacing={2} >
                            <Grid item xs={12} md={6} >
                                <TextField fullWidth type="text" label="Firstname" margin="dense" name="firstname" value={newdetails.firstname} onChange={handleEditChange} variant="outlined" className="bg-light" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField fullWidth type="text" label="Lastname" margin="dense"  name="lastname" value={newdetails.lastname} onChange={handleEditChange} variant="outlined" className="bg-light" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    label="Gender" fullWidth type="text" name="gender" margin="dense" variant="outlined" value={newdetails.gender} onChange={handleEditChange} className="bg-light text-left"
                                >
                                    {gender.map((option) => (
                                        <MenuItem className="text-left" key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField fullWidth type="number" label="Phone number" name="phone" margin="dense" value={newdetails.phone} onChange={handleEditChange} variant="outlined" className="bg-light" />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField fullWidth type="email" label="Email Address" name="email" margin="dense" value={newdetails.email} onChange={handleEditChange} variant="outlined" className="bg-light" />
                            </Grid>

                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" type="submit" color="primary" size="large" className=" pl-2 pr-2 mr-3 shadow  btn text-white" onClick={handleClose} >
                            SAVE
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}
