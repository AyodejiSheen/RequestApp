import React from 'react'
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const Makerequest = (props) => {

    let{handleReqChange, handleReqSubmit, makeReqDetails} = props;

    return (
        <>
            <div className="text-center bg-dark page-title mx-auto mt-4 p-2">
                <p className="lead  text-white mb-0 ">MAKE REQUEST</p>
            </div>

            <Paper className="mt-3">
                <form onSubmit={handleReqSubmit}>
                    <div className="container p-4">

                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <TextField fullWidth type="text" name="title" onChange={handleReqChange} value={makeReqDetails.title} label="Request Title" margin="dense" variant="outlined" className="bg-light" />
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <TextField fullWidth type="date" label="Date" name="date" onChange={handleReqChange} value={makeReqDetails.date} margin="dense" variant="outlined" className="bg-light" />
                            </div>
                        </div>

                        <div className="text-center bg-dark page-title mt-5 p-2 mb-3">
                            <p className="lead  text-white mb-0 "><b>Item Details</b></p>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 mb-4">
                                <TextField fullWidth type="text" label="Item Name" name="itemName" onChange={handleReqChange} value={makeReqDetails.itemName} margin="dense" variant="outlined" className="bg-light" />
                            </div>

                            <div className="col-sm-12 col-md-6 mb-4">
                                <TextField fullWidth type="text" label="Item Description" name="desc" onChange={handleReqChange} value={makeReqDetails.desc} margin="dense" variant="outlined" className="bg-light" />
                            </div>

                            <div className="col-sm-12 col-md-6 mb-4">
                                <TextField fullWidth type="number" label="Quantity" name="qty" onChange={handleReqChange} value={makeReqDetails.qty} margin="dense" variant="outlined" className="bg-light" />
                            </div>

                            <div className="col-sm-12 col-md-6 mb-4">
                                <TextField fullWidth type="text" label="Item Location" name="location" onChange={handleReqChange} value={makeReqDetails.location} margin="dense" variant="outlined" className="bg-light" />
                            </div>

                            <div className="col-sm-12">
                                <TextField fullWidth type="text" multiline rows={4} label="Reason for Request" name="reason" onChange={handleReqChange} value={makeReqDetails.reason} margin="dense" variant="outlined" className="bg-light" />
                            </div>
                        </div>
                        <Button variant="contained" type="submit" color="primary" size="large" className="mt-4 btn btn-block text-white pr-5 pl-5 mx-auto"> Submit Form </Button>

                    </div>

                </form>
            </Paper>
            <br></br>
            <br></br>
        </>
    )
}
