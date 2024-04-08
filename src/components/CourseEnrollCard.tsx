import Image from "next/image";
import { BookMarkSvg, CalendarSvg } from "./svg";
import { IoIosArrowRoundForward } from "react-icons/io";

const CourseEnrollCard = ({
  img,
  name,
  description,
  noOfLessons,
  time,
}: {
  img: string;
  name: string;
  description: string;
  noOfLessons: number;
  time: number;
}) => {
  return (
    <div className="group/card bg-[#FAFAFA] shadow rounded-[16px] max-w-[400px] overflow-hidden transition-all ease-in-out duration-[300ms] hover:shadow-lg cursor-pointer hover:scale-[1.05] ">
      <div className="w-full h-[200px] 2xl:h-[250px] overflow-hidden">
        <Image
          alt="course"
          src={img}
          width={"10000"}
          height={"10000"}
          priority={true}
          className="w-full h-full object-cover transition-all ease-in-out duration-[300ms] group-hover/card:scale-[1.1]"
        />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-[16px] leading-[20px] 2xl:text-[20px] 2xl:leading-[24px] font-[700] text-blue ">
          {name}
        </p>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <BookMarkSvg className="h-[25px] " />
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-[#2C2B2BD9] ">
              {noOfLessons} Lessons
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarSvg className="h-[25px] " />
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-[#2C2B2BD9] ">
              {time} Months
            </p>
          </div>
        </div>
        <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-[#2C2B2BD9] ">
          {description}
        </p>
        <div className="h-[1px] w-full bg-[#D9D9D9] "></div>
        <div className="flex gap-2 items-center transition-all ease-in-out duration-[300ms] group-hover/card:gap-4">
          <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[700] text-[#2C2B2BD9] ">
            ENROLL COURSE
          </p>
          <IoIosArrowRoundForward className="text-blue text-[30px] transition-all ease-in-out duration-[300ms] group-hover/card:rotate-[-45deg] " />
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollCard;
