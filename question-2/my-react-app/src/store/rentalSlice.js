import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rentals:[
    {id:1, customer: "Ramu", carType: "Sedan", rentalDays: 2},
    {id:2, customer: "Shaymu", carType: "SUV", rentalDays: 5},

  ]
}

export const rentalSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {
    addRental : (state,action) => {
      
      state.rentals.push(action.payload);
    },
    editRental: (state, action) => {
      
    },
    deleteRental: (state, action) => {
      state.rentals=state.rentals.filter((rental => rental.id !==action.payload))
    },
  },
})


export const { addRental, editRental,deleteRental } = rentalSlice.actions;

export default rentalSlice.reducer