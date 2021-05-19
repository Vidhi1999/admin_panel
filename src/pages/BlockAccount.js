import React from 'react';
import "./BlockAccount.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

const BlockAccount = () => {
    const restoreAccountData = {
        email: ""
        };
        const [resAccountDetails, setResAccountDetails] = useState(restoreAccountData);
        const [resAccountArr, setResAccountArr] = useState({
            resAccounts: []
        });
        const handleOnChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(`${name} ${value}`);
            setResAccountDetails({ ...resAccountDetails, [name]: value });
        };
        const handleSubmit = () => {
            console.log(resAccountDetails); //Send data on submit
            let temp = resAccountArr.resAccounts;
            temp.push(resAccountDetails);
            setResAccountArr({...resAccountArr, resAccounts: temp});
            console.log(resAccountArr);
        };
        const BlockAccount = (loc) => {
            //Block FROM DATABASE
        }
    return (
        <div>
            <Navbar />
           <div className="resaccount">
            <Sidebar />
                <div className="resaccount-div">
                    <Card className="resaccount-card">
                        <div className="form-group">
                            <label className="resaccount-label">Enter Email to Restore:</label>
                            <input type="email"
                            className="form-control" 
                            name="email" 
                            value={resAccountDetails.email}
						    onChange={handleOnChange} />
                        </div>
                        <button
                        type="submit"
                        onClick={handleSubmit}
                        className="resaccount-blue-btn">
                            Restore Account
                        </button>
                    </Card>
                    <div>
                        {resAccountArr.resAccounts.map((index) => {
                            return(
                                <div className="view-resaccount">
                                    <Card className="view-resaccount-card">
                                        <h6 className="resaccount-name">{index.email}</h6>
                                        <div className="delete-btn">
                                        <button className="white-btn" onClick={BlockAccount(index.email)}>Block</button>
                                        </div>
                                    </Card>
                                </div>

                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlockAccount;
