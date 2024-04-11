import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

const initialState = {
  userData: {}
};

export const getUser = createAsyncThunk('getUser', async (id) => {
  try {
    const response = await api.get(`/getUser/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const updateUser = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  }
});

export const { setUser } = updateUser.actions;

export default updateUser.reducer;
