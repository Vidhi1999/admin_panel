import React from 'react';
import "./AddProfession.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

const AddProfession = () => {
    const professionData = {
        profession: ""
        };
        const [professionDetails, setProfessionDetails] = useState(professionData);
        const [professionArr, setProfessionArr] = useState({
            professions: []
        });
        const handleOnChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(`${name} ${value}`);
            setProfessionDetails({ ...professionDetails, [name]: value });
        };
        const handleSubmit = () => {
            console.log(professionDetails); //Send data on submit
            let temp = professionArr.professions;
            temp.push(professionDetails);
            setProfessionArr({...professionArr, professions: temp});
            console.log(professionArr);
        };
        const deleteProfession = (loc) => {
            //REMOVE FROM DATABASE
        }
    return (
        <div>
            <Navbar />
            <div className="profession">
            <Sidebar />
                <div className="profession-div">
                    <Card className="profession-card">
                        <div className="form-group">
                            <label className="profession-label">Enter Profession:</label>
                            <input type="text"
                            className="form-control" 
                            name="profession" 
                            value={professionDetails.profession}
						    onChange={handleOnChange} />
                        </div>
                        <button
                        type="submit"
                        onClick={handleSubmit}
                        className="profession-blue-btn">
                            Add Profession
                        </button>
                    </Card>
                    <div>
                        {professionArr.professions.map((index) => {
                            return(
                                <div className="view-profession">
                                    <Card className="view-profession-card">
                                        <h6 className="profession-name">{index.profession}</h6>
                                        <div className="delete-btn">
                                        <button className="white-btn" onClick={deleteProfession(index.profession)}>Delete</button>
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

export default AddProfession;
