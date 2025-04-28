import { configureStore } from '@reduxjs/toolkit'
import  rentalsReducer  from './rentalSlice'

const store = configureStore({
  reducer: {
    rentals: rentalsReducer,
    
  },
})


export default store