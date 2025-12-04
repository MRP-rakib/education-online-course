import { API } from "@/api/api";
import { Courses } from "@/types/courses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const courses = createAsyncThunk('courses/',async()=>{
    try {
      const data =await API('courses/',{
        method:"GET",
        headers:{'Content-Type':'application/json'}
      })
      return data
       
    } catch (error) {
        throw error
    }
})

interface stateType{
  data:Courses[],
  loading:boolean,
  error:string|null
}
const initialState:stateType={
  data:[],
  loading:false,
  error:null
}

export const coursesSlice=createSlice({
  name:"courses",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(courses.pending,state=>{state.loading=true})
    .addCase(courses.fulfilled,(state,action)=>{state.loading=false;state.data=action.payload})
    .addCase(courses.rejected,(state,action)=>{state.loading=false;state.data=[];state.error=action.error.message||''})
  }
})

export default coursesSlice.reducer