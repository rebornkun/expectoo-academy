import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import InstructorCard from "@/components/InstructorCard";
import { FullStackSvg } from "@/components/svg";

const SixthSection = () => {
  return (
    <section className="w-full bg-otherGrey">
      <div className="container h-full px-[20px] max-md:pt-[4rem] pt-[8rem] pb-[4rem]  mx-auto flex flex-col gap-14">
        <div className="w-full h-full flex max-md:flex-col gap-4 max-md:px-[2rem] px-[4rem] ">
          <div className="max-md:w-full w-[50%] flex-[1_1_50%] flex gap-2 flex-col">
            <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
              OUR BEST CATEGORY
            </h5>
            <div className="flex flex-col gap-2">
              <h3 className="text-[25px] poppins leading-[30px] 2xl:text-[38px] 2xl:leading-[45px] font-[800] text-blue w-full md:w-[60%] ">
                Expectoo Learning Become an Instructor
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
            <Button type="nom" text="Become an Instructor" link="" />
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <InstructorCard
            heading="Kizito Don-Pedro"
            img={"/images/kizito_aca.jpeg"}
            text="Instructor"
          />
          <InstructorCard
            heading="Jonah Onye"
            img={"/images/jonah_aca.jpeg"}
            text="Instructor"
          />
          <InstructorCard
            heading="Esther Dudu"
            img={"/images/esther_aca.jpeg"}
            text="Instructor"
          />
          <InstructorCard
            heading="Blessing Evelyn"
            img={"/images/eve_aca.jpeg"}
            text="Instructor"
          />
          <InstructorCard
            heading="Joyce Okechucku"
            img={"/images/joyce_aca.jpeg"}
            text="Instructor"
          />
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
