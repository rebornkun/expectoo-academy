import CourseEnrollCard from "@/components/CourseEnrollCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const SecondSectionCourses = () => {
  return (
    <div className="w-full bg-white">
      <div className="container h-full px-[20px] py-[8rem] mx-auto flex flex-col gap-[6rem] items-center ">
        <div className="w-full flex gap-2 flex-col items-center">
          <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
            OUR BEST CATEGORY
          </h5>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-[25px] poppins leading-[30px] 2xl:text-[38px] 2xl:leading-[45px] font-[800] text-blue w-full md:max-w-[650px] text-centerP ">
              Expectoo Learning Platform Experience
            </h3>
            <div className="stick h-[4px] w-[80px] bg-blue "></div>
          </div>
        </div>
        <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2  max-lg:gap-6 grid-cols-3 gap-6 2xl:gap-12 place-items-center w-fit">
          <CourseEnrollCard
            img={"/images/course.jpeg"}
            name={"Fullstack Development"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc pat molestie malesuada ..."
            }
            time={4}
            noOfLessons={24}
          />
          <CourseEnrollCard
            img={"/images/courseTwo.jpeg"}
            name={"Product Design"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc pat molestie malesuada ..."
            }
            time={4}
            noOfLessons={24}
          />
          <CourseEnrollCard
            img={"/images/courseThree.jpeg"}
            name={"Cyber Security"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc pat molestie malesuada ..."
            }
            time={4}
            noOfLessons={24}
          />
          <CourseEnrollCard
            img={"/images/courseFour.jpeg"}
            name={"Data Science"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc pat molestie malesuada ..."
            }
            time={4}
            noOfLessons={24}
          />
          <CourseEnrollCard
            img={"/images/courseFive.jpeg"}
            name={"Digital Marketing"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc pat molestie malesuada ..."
            }
            time={4}
            noOfLessons={24}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSectionCourses;
