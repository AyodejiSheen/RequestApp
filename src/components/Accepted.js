

import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import DeleteIcon from '@material-ui/icons/Delete';





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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  SearchInput: {
    width: '100%'
  }
});





export const AcceptedRequest = (props) => {



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


  let {reqtId, UserLogId} = props;

  let detailsback = localStorage.getItem('usersDetails');
  let usersdetailsback = JSON.parse(detailsback);
  let acceptedReq = usersdetailsback[UserLogId].reqAccpt;





  // for page division
  const Requests = () => {
    return acceptedReq.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }


  let history = useNavigate();
  const rout = () => {
    history("/dashboard/view-acce");
  }




  return (

    <>
      <div className="text-center bg-dark page-title mx-auto mt-4 p-2">
        <p className="lead  text-white mb-0 ">ACCEPTED REQUEST</p>
      </div>



      <div className="container mt-4">
        <Paper>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell >DATE</StyledTableCell>
                  <StyledTableCell align="center">REQUEST TITLE</StyledTableCell>
                  <StyledTableCell align="center">USERNAME</StyledTableCell>
                  <StyledTableCell align="center">ITEM NAME</StyledTableCell>
                  <StyledTableCell align="center">STATUS</StyledTableCell>
                  <StyledTableCell align="center">ACTIONS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Requests().map((each, index) => (
                  <StyledTableRow key={index} id={index} onMouseOver={reqtId}>
                    <StyledTableCell id={index} onMouseOver={reqtId}>{each.date}</StyledTableCell>
                    <StyledTableCell align="center" onMouseOver={reqtId} id={index}>{each.title}</StyledTableCell>
                    <StyledTableCell align="center" onMouseOver={reqtId} id={index}>{each.itemName}</StyledTableCell>
                    <StyledTableCell align="center" onMouseOver={reqtId} id={index}>{each.reqUser}</StyledTableCell>
                    <StyledTableCell align="center" onMouseOver={reqtId} id={index}>{each.reqStatus}</StyledTableCell>
                    <StyledTableCell align="center" onMouseOver={reqtId} id={index}>
                    <Link to={`/dashboard/view-accepted/${index}`}>
                      <Button variant="contained" type="submit" color="primary" size="large" className="mt-1 btn text-white pr-3 pl-3"> VIEW DETAILS </Button>
                    </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={pages}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

    <br></br>
    <br></br>
    <br></br>

    </>
  );
}

