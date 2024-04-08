import Button from "@/components/Button";
import CertificateCard from "@/components/CertificateCard";
import CounterCard from "@/components/CounterCard";

const ForthSection = () => {
  return (
    <section className="w-full bg-blue">
      <div className="container h-full px-[20px] max-md:pt-[4rem] pt-[8rem] max-md:pb-[4rem] pb-[8rem] mx-auto flex flex-col gap-14">
        <div className="w-full h-full flex gap-20 2xl:gap-24 items-center max-md:flex-col max-md:text-center">
          <div className="max-md:max-w-[80%] max-w-[50%] flex-[1_1_50%] flex gap-8 flex-col max-md:items-center">
            <div className="flex gap-4 flex-col ">
              <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
                ABOUT EXPECTOO ACADEMY
              </h5>
              <div className="flex flex-col gap-2 max-md:items-center">
                <h3 className="poppins text-[25px] leading-[30px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-white w-[70%] ">
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
          <div className="max-md:max-w-[80%] max-w-[50%] flex-[1_1_50%] flex flex-col w-full gap-12">
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
