import { API } from "@/api/api";
import { User } from "@/types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk('auth/login/',async(formData:User)=>{
    try {
      const data =await API('auth/login/',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      console.log(data);
      localStorage.setItem('token',data.access)
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

export const LoginSlice=createSlice({
  name:"login",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(login.pending,state=>{state.loading=true})
    .addCase(login.fulfilled,(state,action)=>{state.loading=false;state.success=action.payload&&'Login successfull'})
    .addCase(login.rejected,(state,action)=>{state.loading=false;state.success=null;state.error=action.error.message||''})
  }
})

export default LoginSlice.reducer