import { API } from "@/api/api";
import { Courses, Instructor } from "@/types/courses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const instructor = createAsyncThunk('instructors/',async()=>{
    try {
      const data =await API('instructors/',{
        method:"GET",
        headers:{'Content-Type':'application/json'}
      })
      return data
       
    } catch (error) {
        throw error
    }
})

interface stateType{
  data:Instructor[],
  loading:boolean,
  error:string|null
}
const initialState:stateType={
  data:[],
  loading:false,
  error:null
}

export const instructorSlice=createSlice({
  name:"instructor",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(instructor.pending,state=>{state.loading=true})
    .addCase(instructor.fulfilled,(state,action)=>{state.loading=false;state.data=action.payload})
    .addCase(instructor.rejected,(state,action)=>{state.loading=false;state.data=[];state.error=action.error.message||''})
  }
})

export default instructorSlice.reducer
