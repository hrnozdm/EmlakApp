import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import api from "../api/api";
import { message } from "antd";


const initialState ={
    postData:[]
}

export const addPost = createAsyncThunk('addPost',async (values) =>{
    try {
        const response = await api.post('/addPos',values);
        console.log(response.data);
        message.success('İlan başrıyla kaydedildi');
        return response.data;
    } catch (error) {
        console.log(error);
        message.error("Başarısız İşlem");
    }
});

export const getAllPost = createAsyncThunk('getAllPost',async () =>{
    try {
        const response = await api.get('/getAllPos');
        console.log("veri",response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const  pos  = createSlice({
    name:'pos',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
     builder.addCase(addPost.fulfilled,(state,action)=>{
        state.postData=action.payload;
     });
     builder.addCase(getAllPost.fulfilled,(state,action)=>{
        state.postData=action.payload;
     });

    }
})

export default pos.reducer;
