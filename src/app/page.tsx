import CategoriesSection from "@/components/categories/CategoriesSection";
import CourseSection from "@/components/courses/CourseSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import OurImpact from "@/components/home/OurImpact";
import Patner from "@/components/home/Patner";
import InstructorSection from "@/components/instructors/InstructorSections";


export default function Home() {
  return (
    <div>
      <Hero/>
      <OurImpact/>
      <FeaturesSection/>
      <AboutUs/>
      <CourseSection/>
      <CategoriesSection/>
      <Patner/>
      <InstructorSection/>
    </div>
  );
}
