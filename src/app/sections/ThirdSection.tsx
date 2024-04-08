import Button from "@/components/Button";
import CertificateCard from "@/components/CertificateCard";
import CourseGauge from "@/components/CourseGauge";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="container h-full px-[20px] max-md:pt-[4rem] pt-[8rem] max-md:pb-[2rem] pb-[4rem] mx-auto flex flex-col gap-14">
        <div className="w-full h-full flex max-lg:flex-col justify-evenly max-lg:gap-[12rem] ">
          <div className="w-full lg:max-w-[40%] flex-[1_1_40%] flex gap-8 flex-col">
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
            <div className="w-full flex relative ">
              <Image
                alt="hero"
                src={"/images/acaTwo.jpeg"}
                width={"10000"}
                height={"10000"}
                priority={true}
                className="w-full h-[600px] rounded-[16px] object-cover "
              />
              <div className="absolute w-full bottom-[-20%] left-0 right-0 m-auto flex items-center justify-center">
                <CourseGauge />
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[40%] flex-[1_1_40%] flex flex-col w-full gap-8">
            <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink mb-[-1.5rem]">
              ABOUT EXPECTOO ACADEMY
            </h5>
            <div className="flex flex-col gap-2">
              <h3 className="poppins text-[25px] leading-[30px] 2xl:text-[38px] 2xl:leading-[45px] font-[800] text-blue w-[80%] ">
                Our Large Benefit You Enroll For Our Courses
              </h3>
              <div className="stick h-[4px] w-[80px] bg-blue "></div>
            </div>
            <CertificateCard />
            <Image
              alt="hero"
              src={"/images/acaThree.jpeg"}
              width={"10000"}
              height={"10000"}
              priority={true}
              className="w-full h-[420px] rounded-[16px] object-cover "
            />
            <CertificateCard />
            <Button type="nom" text="REGISTER NOW" link="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
