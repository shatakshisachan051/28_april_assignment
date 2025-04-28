import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addRental } from '../store/rentalSlice';


function AddRental() {
    const [customer,setCustomer]= useState('');
    const [carType,setCarType] = useState('');
    const [rentalDays, setRentalDays]=useState('');
    const dispatch =useDispatch();

    function handleSumbit(e){
        e.preventDefault()

        let rental ={
            id=Date.now(),
            customer,
            carType,
            rentalDays:parseInt(rentalDays)
        };

        dispatch(addRental(rental))

        setCustomer("")
        setCarType("")
        setRentalDays("")

    }


  return (
    <div>
        <h1>ADD Rental</h1>
        <form >
            <input type="text" name="customer" onChange={(e)=> setCustomer(e.target.value) } placeholder='Customer Name...' />
            <input type="text" name="carType" onChange={(e)=> setCarType(e.target.value) } placeholder='Car Type...' />
            <input type="number" name='rentalDays' onChange={(e)=> setRentalDays (e.target.value) }placeholder='renttal days...' />
            <button onClick={()=>handleSumbit(e)} type='submit'> Add</button>
            
        </form>

        <Link to="/">Back (Rental List)</Link>
      
    </div>
  )
}

export default AddRental
