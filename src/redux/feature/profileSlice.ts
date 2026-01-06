import { API } from "@/api/api";
import { User } from "@/types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const profile = createAsyncThunk('profile/',async()=>{
    try {
       const token = localStorage.getItem('token')
      const data =await API('auth/profile',{
        method:"GET",
        headers:{'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`,
        }
      })
      return data
       
    } catch (error) {
        throw error
    }
})

interface stateType{
  user:User|null,
  loading:boolean,
  error:string|null
}
const initialState:stateType={
  user:null,
  loading:false,
  error:null
}

export const profileSlice=createSlice({
  name:"courses",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(profile.pending,state=>{state.loading=true})
    .addCase(profile.fulfilled,(state,action)=>{state.loading=false;state.user=action.payload.data})
    .addCase(profile.rejected,(state,action)=>{state.loading=false;state.user=null;state.error=action.error.message||''})
  }
})

export default profileSlice.reducer