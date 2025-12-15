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
  language?:string;
  last_update?: string; 
}
export interface Instructor {
 id:string
 name:string
 avatar:string
 description?:string
 department?:string
 total_courses?:number
 total_student?:number
 facebook?:string
 linkedin?:string
 twitter?:string


}
export interface lessons{
  id:string,
  order:number,
  video:string,
  topic:string,
  duration:number
  onclick:()=>void
}