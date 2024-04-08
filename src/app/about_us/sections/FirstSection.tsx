import { IoIosArrowRoundForward } from "react-icons/io";

const FirstSection = () => {
  return (
    <div className="w-full bg-blue">
      <div className="container h-full px-[20px] mx-auto flex ">
        <div className="max-md:flex-col flex justify-between items-center w-full pt-[20rem] pb-[5rem] ">
          <h1 className="poppins text-[36px] leading-[50px] 2xl:text-[48px] 2xl:leading-[72px] font-[800] text-white ">
            About Us
          </h1>
          <div className="flex gap-4 items-center">
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white ">
              Home
            </p>
            <IoIosArrowRoundForward className="text-white text-[30px] " />
            <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white ">
              About Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
