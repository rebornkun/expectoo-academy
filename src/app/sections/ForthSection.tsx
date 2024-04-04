import Button from "@/components/Button";
import CertificateCard from "@/components/CertificateCard";
import CounterCard from "@/components/CounterCard";
import CourseGauge from "@/components/CourseGauge";
import Image from "next/image";

const ForthSection = () => {
  return (
    <section className="w-full bg-blue">
      <div className="container h-full px-[20px] pt-[8rem] pb-[8rem] mx-auto flex flex-col gap-14">
        <div className="w-full h-full flex gap-24 ">
          <div className="max-w-[50%] flex-[1_1_50%] flex gap-8 flex-col">
            <div className="flex gap-4 flex-col">
              <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
                ABOUT EXPECTOO ACADEMY
              </h5>
              <div className="flex flex-col gap-2">
                <h3 className="poppins text-[25px] leading-[30px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-white 2xl:w-[70%] ">
                  Our Large Benefit You Enroll For Our Courses
                </h3>
                <div className="stick h-[4px] w-[80px] bg-white "></div>
              </div>
            </div>
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white">
              Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie
              malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat
            </p>
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white">
              rhoncus. Lorem ipsum dolor sit amet consectetur. Quis mauris nunc{" "}
              <b>
                molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
                volutpat
              </b>
            </p>
            <Button type="nom" text="REGISTER NOW" link="" />
          </div>
          <div className="max-w-[50%] flex-[1_1_50%] flex flex-col w-full gap-12">
            <div className="flex gap-4 flex-col">
              <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink text-center">
                OUR VISION
              </h5>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="poppins text-[25px] text-centerP leading-[30px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-white ">
                  To Infinity & Beyond
                </h3>
                <div className="stick h-[4px] w-[80px] bg-white "></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-[2rem] justify-center">
              <CounterCard text={"Faculty Courses"} count={"45K+"} />
              <CounterCard text={"Faculty Courses"} count={"200+"} />
              <CounterCard text={"Faculty Courses"} count={"130+"} />
              <CounterCard text={"Faculty Courses"} count={"200+"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
