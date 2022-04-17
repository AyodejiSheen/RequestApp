
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link, useNavigate, Outlet} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize:"30px",
  },
}));




export  const  Navbar = (props) =>{



  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  
  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    history(`/`);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  //Logic
  //Logic
  //Logic
  //Logic
  //Logic

  let detailsback = localStorage.getItem('usersDetails');
  let usersdetailsback = JSON.parse(detailsback);

  let {UserLogId} = props;







  
  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            REQUEST APP
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit" 
                className="btn text-white"
                
                >
                < AccountCircle style={{fontSize:"30px"}} />  
                <p className="Nlabel ml-3 mb-0 text-left" style={{fontSize:"13px"}}>{usersdetailsback[UserLogId].firstname}  {usersdetailsback[UserLogId].lastname} <br></br> @ {usersdetailsback[UserLogId].username}</p>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/dashboard" style={{textDecoration:"none", color:"black"}}><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
                <Link to="profile" style={{textDecoration:"none", color:"black"}}><MenuItem onClick={handleClose}>My Profile</MenuItem></Link>                
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Outlet />

    </div>
  );
}




