import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function EditRental() {
  const { id } = useParams();
  const [customer,setCustomer]= useState('');
  const [carType,setCarType] = useState('');
  const [rentalDays, setRentalDays]=useState('');
  const dispatch =useDispatch();
  return (
    <div>
      <h1>Edit rental {id}</h1>
      <form>
      <form onSubmit={handleSumbit} >
            <input type="text" name="customer" value={customer} onChange={(e)=> setCustomer(e.target.value) } placeholder='Customer Name...' />
            <input type="text" name="carType" value={carType} onChange={(e)=> setCarType(e.target.value) } placeholder='Car Type...' />
            <input type="number" name='rentalDays' value={rentalDays} onChange={(e)=> setRentalDays (e.target.value) }placeholder='renttal days...' />
            <button  type='submit'> edit</button>
            
        </form>

        <Link to="/">Back (Rental List)</Link>
      </form>
    </div>
  );
}

export default EditRental;
