import { API } from "@/api/api";
import { Courses } from "@/types/courses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const singleCourse = createAsyncThunk('courses/id',async(id:string)=>{
    try {
      const data =await API(`courses/${id}/`,{
        method:"GET",
        headers:{'Content-Type':'application/json'}
      })
      return data
       
    } catch (error) {
        throw error
    }
})

interface stateType{
  data:Courses|null,
  loading:boolean,
  error:string|null
}
const initialState:stateType={
  data:null,
  loading:false,
  error:null
}

export const singleCourseSlice=createSlice({
  name:"singleCourse",
  initialState,
  reducers:{},
  extraReducers:builder=>{
    builder
    .addCase(singleCourse.pending,state=>{state.loading=true})
    .addCase(singleCourse.fulfilled,(state,action)=>{state.loading=false;state.data=action.payload})
    .addCase(singleCourse.rejected,(state,action)=>{state.loading=false;state.data=null;state.error=action.error.message||''})
  }
})

export default singleCourseSlice.reducer