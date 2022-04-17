import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';

import { useParams } from 'react-router-dom';


export const AcceptedReq = (props) => {

    let {UserLogId } = props;

    const requestId = useParams();

    console.log(requestId.id);
    
        console.log(UserLogId);

    let detailsback = localStorage.getItem('usersDetails');
    let usersdetailsback = JSON.parse(detailsback);

    let vacceptedReq = usersdetailsback[UserLogId].reqAccpt;
  
    console.log(vacceptedReq);





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
                            <h4 className=" bg-light text-center p-4">{vacceptedReq[requestId.id].title}</h4>
                        </div>

                        <div>
                            <label className="request-title mt-1 pl-4 pr-4">Date</label>
                            <h4 className=" bg-light text-center p-4">{vacceptedReq[requestId.id].date}</h4>
                        </div>

                        <div>
                            <label className="request-title mt-1 pl-4 pr-4">Item Name</label>
                            <h4 className=" bg-light text-center p-4">{vacceptedReq[requestId.id].itemName}</h4>
                        </div>
                    </div>


                    <div className="col-md-6 shadow p-3 mt-3">
                        <div>
                            <label className="request-title mt-1 pl-4 pr-4">Quantity</label>
                            <h4 className=" bg-light p-2">{vacceptedReq[requestId.id].qty}</h4>
                        </div>

                        <div>
                            <label className="request-title mt-1 pl-4 pr-4">Item Description</label>
                            <h6 className=" bg-light p-2">{vacceptedReq[requestId.id].desc}</h6>
                        </div>

                        <div>
                            <label className="request-title mt-1 pl-4 pr-4">Item Location</label>
                            <h6 className=" bg-light p-2">{vacceptedReq[requestId.id].location}</h6>
                        </div>

                        <div>
                            <label className="request-title mt-1 pl-4 pr-4">Reason</label>
                            <h6 className=" bg-light p-2">{vacceptedReq[requestId.id].reason}</h6>
                        </div>

                        <div className="action-btn text-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <Button variant="contained" type="submit" color="secondary" size="large" className="mt-1 btn btn-block text-white pr-3 pl-3">{vacceptedReq[requestId.id].reqStatus}</Button>
                                </div>
                                <div className='col-md-6'>
                                    <Button variant="contained" type="submit" color="primary" size="large" className="mt-1 btn  btn-block text-white pr-3 pl-3">{vacceptedReq[requestId.id].reqtPhone}</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
