import { API } from "@/api/api";
import { ContactMessage } from "@/types/contact";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const message = createAsyncThunk('contact/',async(formData:ContactMessage)=>{
    try {
      const data =await API('contact/',{
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

export const ContactSlice=createSlice({
  name:"contact",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(message.pending,state=>{state.loading=true})
    .addCase(message.fulfilled,(state,action)=>{state.loading=false;state.success=action.payload ?'message sent successfull':null})
    .addCase(message.rejected,(state,action)=>{state.loading=false;state.success=null;state.error=action.error.message||''})
  }
})

export default ContactSlice.reducer