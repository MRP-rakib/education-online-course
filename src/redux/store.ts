import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from '@/redux/feature/coursesSlice'
import singleCourseReducer from '@/redux/feature/singleCourseSlice'
import suggetionsCourseReducer from '@/redux/feature/suggetionsSlice'
import instructorReducer from '@/redux/feature/instructorSlice'
import blogReducer from '@/redux/feature/blogSlice'
import contactReducer from '@/redux/feature/contactSlice'
import registerReducer from '@/redux/feature/registerSlice'
import loginReducer from '@/redux/feature/loginSlice'
import profileReducer from '@/redux/feature/profileSlice'
export const store = configureStore({
  reducer: {
   courses:coursesReducer,
   singleCourse:singleCourseReducer,
   suggetionsCourse:suggetionsCourseReducer,
   instructor:instructorReducer,
   blog:blogReducer,
   contact:contactReducer,
   register:registerReducer,
   login:loginReducer,
   profile:profileReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch