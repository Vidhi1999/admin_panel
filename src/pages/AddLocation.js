import React from 'react';
import "./AddLocation.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

const AddLocation = () => {
    const locationData = {
        location: ""
        };
        const [locationDetails, setLocationDetails] = useState(locationData);
        const [locationArr, setLocationArr] = useState({
            locations: []
        });
        const handleOnChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(`${name} ${value}`);
            setLocationDetails({ ...locationDetails, [name]: value });
        };
        const handleSubmit = () => {
            console.log(locationDetails); //Send data on submit
            let temp = locationArr.locations;
            temp.push(locationDetails);
            setLocationArr({...locationArr, locations: temp});
            console.log(locationArr);
        };
        const deleteLocation = (loc) => {
            //REMOVE LOCATION FROM DATABASE
        }
    return (
        <div>
            <Navbar />
            <div className="location">
            <Sidebar />
                <div className="location-div">
                    <Card className="location-card">
                        <div className="form-group">
                            <label className="location-label">Enter Location:</label>
                            <input type="text"
                            className="form-control" 
                            name="location" 
                            value={locationDetails.location}
						    onChange={handleOnChange} />
                        </div>
                        <button
                        type="submit"
                        onClick={handleSubmit}
                        className="location-blue-btn">
                            Add Location
                        </button>
                    </Card>
                    <div>
                        {locationArr.locations.map((index) => {
                            return(
                                <div className="view-location">
                                    <Card className="view-location-card">
                                        <h6 className="location-name">{index.location}</h6>
                                        <div className="delete-btn">
                                        <button className="white-btn" onClick={deleteLocation(index.location)}>Delete</button>
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

export default AddLocation;
