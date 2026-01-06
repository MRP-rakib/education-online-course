import { API } from "@/api/api";
import { User } from "@/types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk('auth/register/',async(formData:User)=>{
    try {
      const data =await API('auth/register/',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      return data
       
    } catch (error) {
        throw error
    }
})

interface stateType{
  success:string|null,
  loading:boolean,
  error:string|null
}
const initialState:stateType={
  success:null,
  loading:false,
  error:null
}

export const RegisterSlice=createSlice({
  name:"register",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(register.pending,state=>{state.loading=true})
    .addCase(register.fulfilled,(state,action)=>{state.loading=false;state.success=action.payload.message})
    .addCase(register.rejected,(state,action)=>{state.loading=false;state.success=null;state.error=action.error.message||''})
  }
})

export default RegisterSlice.reducer