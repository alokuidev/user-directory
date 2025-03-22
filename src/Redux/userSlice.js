import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
    "user/fetchUsers", //unique Action Type
    async(_,{ rejectWithValue}) =>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok){
                return rejectWithValue("FailedTo Fetch User List")
            }
            return await response.json(); // Return Api Response
        }
        catch(error)  {
            return  rejectWithValue(error.message);
        }
    }
)

const userSlice = createSlice({
    name:'user',
    initialState:{users:[],status:'idle', error:null },
    
})