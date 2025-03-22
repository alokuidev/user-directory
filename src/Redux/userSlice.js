import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_,{rejectWithValue}) =>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
                return rejectWithValue("Failed to fetch user list");
            }
            return await response.json();
        } catch (error) {
                return rejectWithValue(error.message);
        }
    }
)

