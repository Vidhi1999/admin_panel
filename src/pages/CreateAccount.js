import React from 'react';
import "./CreateAccount.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

const CreateAccount = () => {
    const accountData = {
        email: ""
        };
        const [accountDetails, setAccountDetails] = useState(accountData);
        const [accountArr, setAccountArr] = useState({
            accounts: []
        });
        const handleOnChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(`${name} ${value}`);
            setAccountDetails({ ...accountDetails, [name]: value });
        };
        const handleSubmit = () => {
            console.log(accountDetails); //Send data on submit
            let temp = accountArr.accounts;
            temp.push(accountDetails);
            setAccountArr({...accountArr, accounts: temp});
            console.log(accountArr);
        };
        const deleteAccount = (loc) => {
            //REMOVE LOCATION FROM DATABASE
        }
    return (
        <div>
           <Navbar />
           <div className="account">
            <Sidebar />
                <div className="account-div">
                    <Card className="account-card">
                        <div className="form-group">
                            <label className="account-label">Enter Email:</label>
                            <input type="email"
                            className="form-control" 
                            name="email" 
                            value={accountDetails.email}
						    onChange={handleOnChange} />
                        </div>
                        <button
                        type="submit"
                        onClick={handleSubmit}
                        className="account-blue-btn">
                            Add Staff Account
                        </button>
                    </Card>
                    <div>
                        {accountArr.accounts.map((index) => {
                            return(
                                <div className="view-account">
                                    <Card className="view-account-card">
                                        <h6 className="account-name">{index.email}</h6>
                                        <div className="delete-btn">
                                        <button className="white-btn" onClick={deleteAccount(index.email)}>Delete</button>
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

export default CreateAccount;
