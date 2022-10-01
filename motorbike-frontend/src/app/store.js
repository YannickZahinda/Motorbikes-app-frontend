import { configureStore } from '@reduxjs/toolkit';
import motorbikeReducer from '../redux/motorbikeSlice';


  const store = configureStore(
   {
    reducer: {
      motorbikes: motorbikeReducer,
    },
  }
  );
export default store;