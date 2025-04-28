import { configureStore } from '@reduxjs/toolkit'
import { rentalSlice } from './rentalSlice'

const store = configureStore({
  reducer: {
    rentals: rentalSlice,
    
  },
})


export default store