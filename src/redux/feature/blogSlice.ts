import { API } from "@/api/api";
import { Blog } from "@/types/blog";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBlog = createAsyncThunk('blogs/',async()=>{
    try {
      const data =await API('blogs/',{
        method:"GET",
        headers:{'Content-Type':'application/json'}
      })
      return data
       
    } catch (error) {
        throw error
    }
})

interface stateType{
  data:Blog[],
  loading:boolean,
  error:string|null
}
const initialState:stateType={
  data:[],
  loading:false,
  error:null
}

export const blogSlice=createSlice({
  name:"blog",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(getBlog.pending,state=>{state.loading=true})
    .addCase(getBlog.fulfilled,(state,action)=>{state.loading=false;state.data=action.payload})
    .addCase(getBlog.rejected,(state,action)=>{state.loading=false;state.data=[];state.error=action.error.message||''})
  }
})

export default blogSlice.reducer