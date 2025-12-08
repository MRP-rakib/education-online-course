import { API } from "@/api/api";
import { Courses } from "@/types/courses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const suggestionCourses = createAsyncThunk('courses/id/suggetions',async(id:string)=>{
    try {
      const data =await API(`courses/${id}/suggestions/`,{
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

export const suggestionCoursesSlice=createSlice({
  name:"courses",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(suggestionCourses.pending,state=>{state.loading=true})
    .addCase(suggestionCourses.fulfilled,(state,action)=>{state.loading=false;state.data=action.payload})
    .addCase(suggestionCourses.rejected,(state,action)=>{state.loading=false;state.data=[];state.error=action.error.message||''})
  }
})

export default suggestionCoursesSlice.reducer