import React from "react";
import { useParams } from "react-router-dom";

function EditRental() {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit rental {id}</h1>
      <form>
        <input type="text" name="customer" placeholder="Customer Name..." />
        <input type="text" name="carType" placeholder="Car Type..." />
        <input type="number" name="rentalDays" placeholder="renttal days..." />
        <button type="submit"> Update </button>
      </form>
    </div>
  );
}

export default EditRental;
