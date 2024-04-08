import Button from "@/components/Button";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="back w-full absolute top-0 m-auto z-[1]">
        <Image
          alt="background"
          src={"/images/sevenBack.png"}
          width={10000}
          height={10000}
          quality={100}
          priority={true}
          className="w-full object-cover object-bottom h-[300px] 2xl:h-[600px]"
        />
      </div>
      <div className="container h-full px-[20px] max-md:pt-[3rem] pt-[6rem] max-md:pb-[3rem] pb-[6rem] mx-auto flex flex-col gap-14 relative z-[2]">
        <div className="w-full h-full flex flex-col items-center gap-8 ">
          <div className="flex gap-4 flex-col items-center">
            <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
              The Best Instructors
            </h5>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="poppins text-[25px] leading-[30px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-blue 2xl:w-[65%] text-centerP">
                Expectoo Learning Become an Instructor
              </h3>
              <div className="stick h-[4px] w-[80px] bg-blue "></div>
            </div>
          </div>
        </div>
        <div className="bg-blue w-full py-[4rem] px-[20px] flex flex-col gap-8 items-center rounded-[16px] ">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="poppins text-[25px] leading-[30px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-white 2xl:w-[70%] text-centerP ">
              Why Students Choose Us to Learn & Grow
            </h3>
            <div className="stick h-[4px] w-[80px] bg-white "></div>
          </div>
          <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white  2xl:w-[50%] text-center">
            Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie
            malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat
          </p>
          <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white  2xl:w-[50%] text-center mb-4">
            rhoncus. Lorem ipsum dolor sit amet consectetur. Quis mauris nunc{" "}
            <b>
              molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
              volutpat
            </b>
          </p>
          <Button type="nom" text="JOIN US NOW" link="" />
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
