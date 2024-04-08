import FirstSectionCourses from "./sections/FirstSectionCourses";
import SecondSectionCourses from "./sections/SecondSectionCourses";

const page = () => {
  return (
    <div className="w-full">
      <FirstSectionCourses />
      <SecondSectionCourses />
    </div>
  );
};

export default page;
