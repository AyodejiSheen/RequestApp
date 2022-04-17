import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import useLocalStorage from '../src/components/useLocalstorage';

import { Navigate, Route, Router, Routes } from 'react-router-dom';



import './App.css';
import './mediaQuery.css';
import { CssBaseline } from '@material-ui/core';

//component pages
import { SignIn } from './components/sign-in';
import { Dashboard } from './components/dashboard';
import { Navbar } from './components/Navbar';
import { Makerequest } from './components/makerequest';
import { AvailableRequest } from './components/available';
import { AcceptedRequest } from './components/Accepted';
import { PersonalRequest } from './components/personal';
import { EditperReq } from './components/personal';
import { Profile } from './components/Profile';
import { ViewRequest } from './components/ViewRequest';
import { AcceptedReq } from './components/viewaccepted';
import { Viewpersonal } from './components/viewpersonal';




function App() {
    //to create user id
    let [userId, setuserId] = useState(0);

    //to create request id
    let [requestId, setrequestId] = useState();

    //Accepting requests
    let [status, setStatus] = useState("Waiting");

    useEffect(()=>{
        console.log(users.length);
    }, []);


    //Sign in paramters
    let [signPassword, setsignPassword] = useState();
    let [signUser, setsignUser] = useState();
    let [info, setInfo] = useState();
    let [checking, setChecking] = useState(false);
    let [UserLogId, setUserLogId] = useState();


    //making request parameters
    let [reqUsrname, setreqUsrname] = useState();
    let [reqPhone, setreqPhone] = useState();


    //registration details
    let [userRegDetails, setuserRegDetails] = useState({ firstname: "", userId: "", lastname: "", gender: "", phone: "", email: "", username: "", password: "", cPassword: "", reqAccpt:"", personalReq:""});
    let[users, setUsers] = useLocalStorage("usersDetails", []);
  
    


    //submit registration and set to localstorage
    const handleRegSubmit = (e) => {
        e.preventDefault();
        console.log(userRegDetails);

        if (users.length === 0){
            userRegDetails.userId = 1;
            userRegDetails.reqAccpt = [];
            userRegDetails.personalReq = [];
            setUsers([...users, userRegDetails]);
            console.log(users);
            setuserRegDetails({ firstname: "", lastname: "", gender: "", phone: "", email: "", username: "", password: "", cPassword: "" });

        }else{

            let detailsback = localStorage.getItem('usersDetails');
            let usersdetailsback = JSON.parse(detailsback);
            userRegDetails.userId = usersdetailsback.length + 1;
            userRegDetails.reqAccpt = [];
            userRegDetails.personalReq = [];
            setUsers([...users, userRegDetails]);
            console.log(users);
            setuserRegDetails({ firstname: "", lastname: "", gender: "", phone: "", email: "", username: "", password: "", cPassword: "" });
        }
    }




    //handle registration input
    const handleRegChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setuserRegDetails({ ...userRegDetails, [name]: value });
    }


    //handle signin input
    const handleSignUsername = (e) => {
        let signUsername = e.target.value;
        setsignUser(signUsername);
    }

    const handleSignPassword = (e) => {
        let signPassword = e.target.value;
        setsignPassword(signPassword);
    }


    //handle signin submit
    const handleSignSubmit = (e) => {
        e.preventDefault();
        setsignUser("");
        setsignPassword("");

        if(users.length === 0){
            window.alert("No User is registered")
        }else{

            let detailsback = localStorage.getItem('usersDetails');
            let usersdetailsback = JSON.parse(detailsback);
    
    
            let UserRegIndex = usersdetailsback.findIndex(std => std.username == signUser);
            setUserLogId(UserRegIndex);
            console.log(UserRegIndex);
    
    
            if (UserRegIndex >= 0) {
                console.log(UserRegIndex, "found");
                setChecking(true);
                setInfo("Match Found");
                setreqUsrname(usersdetailsback[UserRegIndex].username);
                setreqPhone(usersdetailsback[UserRegIndex].phone);
    
    
            } else {
                console.log(UserRegIndex, "not found")
                setInfo("Match not Found");
    
            };
        }

    }



    //Make request details
    let [makeReqDetails, setmakeReqDetails] = useState({ title: "", date: "", itemName: "", desc: "", location: "", qty: "", reason: "", reqStatus:"", reqUser: "", reqId: "", reqtPhone:""});
    let[requests, setRequests] = useLocalStorage("requestDetails", []);




    let [reqId, setReqId] = useState(0);


    //submitting reguest
    const handleReqSubmit = (e) => {
        e.preventDefault();

        // setReqId(requests.length + 1);
        setStatus("waiting");

        if (requests.length === 0 ){   
            makeReqDetails.reqId =  1;
            makeReqDetails.reqUser = reqUsrname;
            makeReqDetails.reqStatus = status;
            makeReqDetails.reqtPhone = reqPhone;
            users[UserLogId].personalReq.push(makeReqDetails);
            console.log(users[UserLogId].personalReq);
            setRequests([...requests, makeReqDetails]);
            console.log(UserLogId);
    
            console.log(requests);
            setmakeReqDetails({ title: "", date: "", itemName: "", desc: "", location: "", qty: "", reason: "", reqId: "" });

            let usersdetails = JSON.stringify(users);
            localStorage.setItem('usersDetails', usersdetails);


    }else {
        let rdetailsback = localStorage.getItem('requestDetails');
        let detailsback = JSON.parse(rdetailsback);

        makeReqDetails.reqId = detailsback.length + 1;
        makeReqDetails.reqUser = reqUsrname;
        makeReqDetails.reqStatus = status;
        makeReqDetails.reqtPhone = reqPhone;
        users[UserLogId].personalReq.push(makeReqDetails);
        console.log(users[UserLogId].personalReq);
        setRequests([...requests, makeReqDetails]);
       
        console.log(UserLogId);

        console.log(requests);
        setmakeReqDetails({ title: "", date: "", itemName: "", desc: "", location: "", qty: "", reason: "", reqId: "" });
        let usersdetails = JSON.stringify(users);
        localStorage.setItem('usersDetails', usersdetails);
    }



    }


    //To get the rquest ID
    const reqtId = (e) => {
        let reqid = e.target.id;
        setrequestId(reqid);
        console.log(reqid);
        console.log(requestId);
    }


    //handle requests input
    const handleReqChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setmakeReqDetails({ ...makeReqDetails, [name]: value });
    }


    //handle accept request
    const acceptReq = () => {

        let rdetailsback = localStorage.getItem('requestDetails');
        let redetailsback = JSON.parse(rdetailsback);

        redetailsback[requestId].reqStatus = "Accepted";
        alert("Request Accepted!")

        let udetailsback = localStorage.getItem('usersDetails');
        let usersdetailsback = JSON.parse(udetailsback);

        usersdetailsback[UserLogId].reqAccpt.push(redetailsback[requestId]);

        let details = JSON.stringify(usersdetailsback);
        localStorage.setItem('usersDetails', details);        

        let reqstDetails = JSON.stringify(redetailsback);
        localStorage.setItem('requestDetails', reqstDetails);
    }



    let [personalReq, setPersonalReq] = useState([]);
  
    


    const check = () => {
      let detailsback = localStorage.getItem('usersDetails');
      let usersdetailsback = JSON.parse(detailsback);
    
      let reqtdetailsback = localStorage.getItem('requestDetails');
      let reqdetailsback = JSON.parse(reqtdetailsback);
  
      let userlog = usersdetailsback[UserLogId].username;
      let UserReq = reqdetailsback.filter(std => std.reqUser == userlog);
      setPersonalReq(UserReq);
      console.log(UserReq);
      console.log(personalReq);
    }


  










    return (
        <>

            <Routes>
                <Route path="/" element={<SignIn handleRegSubmit={handleRegSubmit} handleRegChange={handleRegChange} userRegDetails={userRegDetails}
                            handleSignUsername={handleSignUsername} handleSignSubmit={handleSignSubmit} handleSignPassword={handleSignPassword}
                            signUser={signUser} signPassword={signPassword} info={info} />}>            
                </Route>

                <Route path="/dashboard" element={<Navbar UserLogId={UserLogId}/> }>

                    <Route index  element={<Dashboard check={check}/>}></Route>
                    <Route path="make-request" element={<Makerequest handleReqChange={handleReqChange} handleReqSubmit={handleReqSubmit} makeReqDetails={makeReqDetails} />}></Route>
                    <Route  path="available-request" element={<AvailableRequest requests={requests} reqtId={reqtId} />}></Route>
                    <Route path="accepted-request" element={<AcceptedRequest requests={requests} reqtId={reqtId} UserLogId={UserLogId}/>}></Route>
                    <Route path="personal-request" element={<PersonalRequest reqUsrname={reqUsrname} UserLogId={UserLogId} personalReq={personalReq} reqtId={reqtId}/>}></Route>
                    <Route path="profile" element={<Profile users={users} UserLogId={UserLogId} handleRegChange={handleRegChange} />}></Route>
                    <Route path="view-requests/:id" element={ <ViewRequest requestId={requestId}  UserLogId={UserLogId} acceptReq={acceptReq}/>}></Route>
                    <Route path="view-accepted/:id" element={ <AcceptedReq requestId={requestId} UserLogId={UserLogId}/>}></Route>
                    <Route path="view-personal/:id" element={ <Viewpersonal requestId={requestId} UserLogId={UserLogId}/>}></Route>
                    <Route path="view-personal-requests" element={<EditperReq requestId={requestId} personalReq={personalReq} acceptReq={acceptReq}/>}></Route>

                </Route>
            </Routes>



            {/* <Router>

                    {/*  

<GaurdRoute exact path="/home" component={Main} condition={auth} newUser={newUser}/>
                </Switch>
            </Router> */}


            <CssBaseline />
        </>
    );
}

export default App;


