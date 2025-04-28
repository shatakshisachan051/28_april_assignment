import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {Link} from 'react-router-dom'
import { addRental, deleteRental } from "../store/rentalSlice";



function RentalList(){
    const rentals = useSelector(state => state.rentals.rentals)
    const dispatch = useDispatch();
    
    function handleDelete(id){
        dispatch(deleteRental(id))
    }
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
                                <button onClick={()=>
                                    handleDelete(rental.id)
                                }>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>
        </div>

    )
}

export default RentalList