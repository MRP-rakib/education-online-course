import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from '@/redux/feature/coursesSlice'
import singleCourseReducer from '@/redux/feature/singleCourseSlice'
import suggetionsCourseReducer from '@/redux/feature/suggetionsSlice'
import instructorReducer from '@/redux/feature/instructorSlice'
export const store = configureStore({
  reducer: {
   courses:coursesReducer,
   singleCourse:singleCourseReducer,
   suggetionsCourse:suggetionsCourseReducer,
   instructor:instructorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch