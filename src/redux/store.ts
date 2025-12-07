import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from '@/redux/feature/coursesSlice'
import singleCourseReducer from '@/redux/feature/singleCourseSlice'

export const store = configureStore({
  reducer: {
   courses:coursesReducer,
   singleCourse:singleCourseReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch