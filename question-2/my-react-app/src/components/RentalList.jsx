import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {Link} from 'react-router-dom'
import { addRental } from "../store/rentalSlice";



function RentalList(){
    const rentals = useSelector(state => state.rentals.rentals)
    const dispatch = useDispatch();
    useEffect(()=>{
        

    },[dispatch])
    return(
        <div>
            <h2>
                Rental List
            </h2>
            <Link to="/rent">Add Rent</Link>
            <div>
                {rentals.length===0 ? (
                    <p>No Renttal</p>
                ) : (
                    <ul>
                        {rentals.map((rental)=> (
                            <li key={rental.id}>
                                {rental.customer}- {rental.carType} - { rental.rentalDays} days
                                <Link to={`/edit/${rental.id}`}>Edit</Link>
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>
        </div>

    )
}

export default RentalList