export interface Courses {
  id?: string; 
  title:string;
  image: string; 
  description?: string;
  price: number;
  lessons?:lessons[],
  total_students: number;
  total_lessons: number;
  total_hours: number;
  instructor?: Instructor[];
  category: string;
  rating: number;
  last_update?: string; 
}
export interface Instructor {
 id:string
 name:string
 avatar:string,
 total_courses:number,
 total_student:number


}
export interface lessons{
  id:string,
  order:number,
  video:string,
  topic:string,
  duration:number
}