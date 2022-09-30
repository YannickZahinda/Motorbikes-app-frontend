import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  motorbikes: [],
  loading: false,
  message: '',
};

const getMotorbikes = async() => {
  const response = await axios.get('http://localhost:3000/motorbikes');
    let result = await response.data;
    // const formatedData = result.map((motorbike) => ({
    //   id: motorbike.id,
    //   name: motorbike.name,
    //   description: motorbike.description,
    //   price: motorbike.price

    // }))
    // return formatedData;
    return result;
}

export const motorbikesAsync = createAsyncThunk(
  'motorbike/fetchApi',
  async () => {
    const allmotorbikes = await getMotorbikes()
    console.log(allmotorbikes);
    return allmotorbikes;
  }
)

export const motorbikeSlice = createSlice(
  {
    name: 'motorbikes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(motorbikesAsync.fulfilled, (state, action) => {
        state.motorbikes.push(action.payload);
      })
    }
    // extraReducers: { [motorbikesAsync.pending]: (state) =>  {
    //   state.loading = true
    // },
    // [motorbikesAsync.fulfilled]: (state, action) => {
    //   state.motorbikes = action.payload
    // },
  },
)

export default motorbikeSlice.reducer

