import {configureStore} from "@reduxjs/toolkit";
import getUserSlice from "./GetUserSlice";
import PosSlice from "./PosSlice";

export const store = configureStore({
    reducer:{
        getUser:getUserSlice,
        pos:PosSlice
    }
});