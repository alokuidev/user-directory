import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
    name:'user',
    initialState:{ users: [], status: "idle", error: null },
    extraReducers: (builder) =>{
            builder.addCase(fetchUser.pending, (state)=>{
                state.status = "loading"; // API call started
            })
            .addCase(fetchUser.fulfilled, (state,action)=>{
                state.status = "Success"; // API call Completed
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action)=>{
                state.status = "Rejected" // API call failed
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer;
