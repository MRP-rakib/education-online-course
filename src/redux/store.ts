import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from '@/redux/feature/coursesSlice'
import singleCourseReducer from '@/redux/feature/singleCourseSlice'
import suggetionsCourseReducer from '@/redux/feature/suggetionsSlice'

export const store = configureStore({
  reducer: {
   courses:coursesReducer,
   singleCourse:singleCourseReducer,
   suggetionsCourse:suggetionsCourseReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch