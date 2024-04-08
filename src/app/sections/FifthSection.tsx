import Button from "@/components/Button";
import CertificateCard from "@/components/CertificateCard";
import CounterCard from "@/components/CounterCard";
import CourseGauge from "@/components/CourseGauge";
import Image from "next/image";

const FifthSection = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="back w-full absolute top-0 m-auto z-[1]">
        <Image
          alt="background"
          src={"/images/clockBack.png"}
          width={10000}
          height={10000}
          quality={100}
          priority={true}
          className="w-full object-cover object-bottom h-[500px] md:h-[700px] 2xl:h-[800px]"
        />
      </div>
      <div className="container h-full px-[20px] max-md:pt-[4rem] pt-[8rem] max-md:pb-[4rem] pb-[8rem] mx-auto flex flex-col gap-14 relative z-[2]">
        <div className="w-full h-full flex flex-col items-center gap-6 2xl:gap-8 ">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="poppins text-[25px] leading-[30px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-white md:w-[70%] text-centerP ">
              Why Students Choose Us to Learn & Grow
            </h3>
            <div className="stick h-[4px] w-[80px] bg-white "></div>
          </div>
          <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white  lg:w-[50%] text-center">
            Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie
            malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat
          </p>
          <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white  lg:w-[50%] text-center mb-4">
            rhoncus. Lorem ipsum dolor sit amet consectetur. Quis mauris nunc{" "}
            <b>
              molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
              volutpat
            </b>
          </p>
          <Button type="nom" text="JOIN US NOW" link="" />
          <video className="h-[350px] 2xl:h-[500px] w-full lg:w-[80%] border-pink border-[4px] rounded-[16px] mt-4 bg-white"></video>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
