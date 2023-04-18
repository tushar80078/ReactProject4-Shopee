import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"

export const fetchPosts=createAsyncThunk(
    "fetchPosts",
    async()=>{
        

        const res=await axios.get("https://fakestoreapi.com/products");
        
        
        return res;
    }
)