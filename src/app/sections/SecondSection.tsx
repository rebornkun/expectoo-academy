import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import { FullStackSvg } from "@/components/svg";

const SecondSection = () => {
  return (
    <section className="w-full bg-otherGrey">
      <div className="container h-full px-[20px] pt-[8rem] pb-[4rem] mx-auto flex flex-col gap-14">
        <div className="w-full h-full flex gap-4 px-[4rem] ">
          <div className="w-[50%] flex-[1_1_50%] flex gap-2 flex-col">
            <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
              OUR BEST CATEGORY
            </h5>
            <div className="flex flex-col gap-2">
              <h3 className="text-[25px] poppins leading-[30px] 2xl:text-[38px] 2xl:leading-[45px] font-[800] text-blue 2xl:w-[60%] ">
                Expectoo Learning Platform Experience
              </h3>
              <div className="stick h-[4px] w-[80px] bg-blue "></div>
            </div>
          </div>
          <div className="w-[50%] flex-[1_1_50%] flex flex-col w-full gap-8">
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie
              malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat
            </p>
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400]">
              rhoncus. Lorem ipsum dolor sit amet consectetur. Quis mauris nunc{" "}
              <b>
                molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
                volutpat
              </b>
            </p>
            <Button type="nom" text="MORE COURSES" link="" />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <CourseCard
            heading="Fullstack"
            svg={<FullStackSvg className="" />}
            text="Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat rhoncus. Lorem ipsum dolor sit a"
          />
          <CourseCard
            heading="Product Design"
            svg={<FullStackSvg className="" />}
            text="Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat rhoncus. Lorem ipsum dolor sit a"
          />
          <CourseCard
            heading="Cyber Security"
            svg={<FullStackSvg className="" />}
            text="Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat rhoncus. Lorem ipsum dolor sit a"
          />
          <CourseCard
            heading="Data Science"
            svg={<FullStackSvg className="" />}
            text="Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat rhoncus. Lorem ipsum dolor sit a"
          />
          <CourseCard
            heading="Digital Marketing"
            svg={<FullStackSvg className="" />}
            text="Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat rhoncus. Lorem ipsum dolor sit a"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
