

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//For Edit Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  SearchInput: {
    width: '100%'
  }
});





export const PersonalRequest = (props) => {


  let [pReqId, setpReqId] = useState(1);



  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setrowsPerPage] = useState(pages[page])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setrowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }










  //Logic begins
  //Logic begins
  //Logic begins

  let {reqtId, UserLogId} = props;

  let detailsback = localStorage.getItem('usersDetails');
  let usersdetailsback = JSON.parse(detailsback);
  let personalReq = usersdetailsback[UserLogId].personalReq;



  const record = () => {
    return personalReq.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }




  let history = useNavigate();

  const rout = (id) => {
    history(`/dashboard/view-personal/${id}`);
    console.log(id);
  }

  
  const deleteReq = (id) => {

    // console.log(id);

    // let newr = record().splice(id, 1);

    // let details = JSON.stringify(newr);
    // localStorage.setItem('requestDetails', details);
    // console.log(record());
    // console.log("?????????????")
    // let newr = record().splice(id, 1);
    // console.log(newr);
    // console.log("********")

    // let array = [
    //   {title:"me1", time:"2:00pm"},
    //   {title:"me2", time:"2:00pm"},
    //   {title:"me3", time:"2:00pm"},
    //   {title:"me4", time:"2:00pm"}
    // ];

    // console.log(array)


    // array.splice(id, 1)

    // console.log(array)


    // let UserReq = reqdetailsback.filter(std => std.reqUser == userlog);




    let newr = record().filter(each => each.reqId !== id);


    let details = JSON.stringify(newr);
    localStorage.setItem('usersDetails', details);

    console.log(newr)
    

  }



  return (

    <>

      <div className="text-center bg-dark page-title mx-auto mt-4 p-2">
        <p className="lead  text-white mb-0 ">PERSONAL REQUEST</p>
      </div>



      <div className="container mt-4">
        <Paper>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell >DATE</StyledTableCell>
                  <StyledTableCell align="center">REQUEST TITLE</StyledTableCell>
                  <StyledTableCell align="center">ITEM NAME</StyledTableCell>
                  <StyledTableCell align="center">USERNAME</StyledTableCell>
                  <StyledTableCell align="center">STATUS</StyledTableCell>
                  <StyledTableCell align="center">ACTION</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {record().map((each, index) => (
                  <StyledTableRow key={index} id={index} onMouseOver={reqtId} >
                    <StyledTableCell id={index} >{each.date}</StyledTableCell>
                    <StyledTableCell align="center" id={index}>{each.title}</StyledTableCell>
                    <StyledTableCell align="center" id={index}>{each.itemName}</StyledTableCell>
                    <StyledTableCell align="center" id={index}>{each.reqUser}</StyledTableCell>
                    <StyledTableCell align="center" id={index}>{each.reqStatus}</StyledTableCell>
                    <StyledTableCell align="center" id={index}>
                    <Button variant="contained" type="submit" color="primary" size="large" className="mt-1 btn text-white ml-3" onClick={() => rout(index)}> View </Button>
                    {/* <Button variant="contained" type="submit" color="primary" size="large" className="mt-1 btn text-white ml-3"> Edit </Button>
                    <Button variant="contained" type="submit" color="primary" size="large" className="mt-1 btn text-white ml-3" onClick={() => deleteReq(each.reqId)}> <DeleteIcon /> </Button> */}
                    </StyledTableCell> 
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={pages}
            component="div"
            count={personalReq.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>


    </>
  );
}







export const EditperReq = (props) => {


  //For EDIT dialog box
  //For EDIT dialog box
  //For EDIT dialog box
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let { requestId, personalReq } = props;


  return (
    <>
      <div className="text-center bg-dark page-title mx-auto mt-4 p-2">
        <p className="lead  text-white mb-0 ">REQUEST DETAILS</p>
      </div>

      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 mt-3 p-3 shadow">
            <div>
              <label className=" request-title mt-1 ">Request Title</label>
              <h4 className=" bg-light text-center p-4">{personalReq[requestId].title}</h4>
            </div>

            <div>
              <label className="request-title mt-1 pl-4 pr-4">Date</label>
              <h4 className=" bg-light text-center p-4">{personalReq[requestId].date}</h4>
            </div>

            <div>
              <label className="request-title mt-1 pl-4 pr-4">Item Name</label>
              <h4 className=" bg-light text-center p-4">{personalReq[requestId].itemName}</h4>
            </div>
          </div>


          <div className="col-md-6 shadow p-3 mt-3">
            <div>
              <label className="request-title mt-1 pl-4 pr-4">Quantity</label>
              <h4 className=" bg-light p-2">{personalReq[requestId].qty}</h4>
            </div>

            <div>
              <label className="request-title mt-1 pl-4 pr-4">Item Description</label>
              <h6 className=" bg-light p-2">{personalReq[requestId].desc}</h6>
            </div>

            <div>
              <label className="request-title mt-1 pl-4 pr-4">Item Location</label>
              <h6 className=" bg-light p-2">{personalReq[requestId].location}</h6>
            </div>

            <div>
              <label className="request-title mt-1 pl-4 pr-4">Reason</label>
              <h6 className=" bg-light p-2">{personalReq[requestId].reason}</h6>
            </div>

            <div className="action-btn text-center">
              <div className="row">
                <div className="col-md-6">
                  <Button variant="contained" type="submit" color="secondary" size="large" className="mt-1 btn btn-block text-white pr-3 pl-3" onClick={handleClickOpen} ><EditIcon/></Button>
                </div>
                <div className='col-md-6'>
                  <Button variant="contained" type="submit" color="primary" size="large" className="mt-1 btn  btn-block text-white pr-3 pl-3"><DeleteIcon/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* //For Edit Dialog
//For Edit Dialog
//For Edit Dialog
//For Edit Dialog */}

      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit your Request</DialogTitle>
          <DialogContent>
            <div className="container p-4">

              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <TextField fullWidth type="text" label="Request Title" margin="dense" value ={personalReq[requestId].title} variant="outlined" className="bg-light" />
                </div>

                <div className="col-sm-12 col-md-6">
                  <TextField fullWidth type="date" label="Date"  margin="dense" value ={personalReq[requestId].date} variant="outlined" className="bg-light" />
                </div>
              </div>

              <div className="text-center bg-dark page-title mt-5 p-2 mb-3">
                <p className="lead  text-white mb-0 ">Item Details</p>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 mb-4">
                  <TextField fullWidth type="text" label="Item Name" margin="dense" value ={personalReq[requestId].itemName} variant="outlined" className="bg-light" />
                </div>

                <div className="col-sm-12 col-md-6 mb-4">
                  <TextField fullWidth type="text" label="Item Description" margin="dense" value ={personalReq[requestId].desc} variant="outlined" className="bg-light" />
                </div>

                <div className="col-sm-12 col-md-6 mb-4">
                  <TextField fullWidth type="number" label="Quantity" margin="dense" variant="outlined" value ={personalReq[requestId].phone} className="bg-light" />
                </div>

                <div className="col-sm-12 col-md-6 mb-4">
                  <TextField fullWidth type="text" label="Item Location" margin="dense" value ={personalReq[requestId].location} variant="outlined" className="bg-light" />
                </div>

                <div className="col-sm-12">
                  <TextField fullWidth type="text" multiline rows={4} label="Reason for Request" margin="dense" value ={personalReq[requestId].reason} variant="outlined" className="bg-light" />
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit" color="primary" size="large" className=" pl-2 pr-2 mr-3 shadow  btn text-white" onClick={handleClose} >
              SAVE CHANGES
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

