import React from 'react'


function AddRental() {
  return (
    <div>
        <h1>ADD Rental</h1>
        <form >
            <input type="text" name="customer" placeholder='Customer Name...' />
            <input type="text" name="carType" placeholder='Car Type...' />
            <input type="number" name='rentalDays' placeholder='renttal days...' />
            <button type='submit'> Add</button>
            
        </form>

        <Link to="/">Back (Rental List)</Link>
      
    </div>
  )
}

export default AddRental
