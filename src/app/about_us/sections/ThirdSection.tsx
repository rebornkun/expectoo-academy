import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="container h-full px-[20px] py-[8rem] mx-auto flex ">
        <div className="w-full h-full flex max-md:flex-col gap-[4rem] 2xl:gap-[6rem] items-center  ">
          <div className="grid grid-cols-3 grid-rows-1 gap-8  ">
            <Image
              alt="course"
              src={"/images/per.jpeg"}
              width={"10000"}
              height={"10000"}
              className="w-full h-full object-cover object-center transition-all ease-in-out duration-[300ms] rounded-[16px] "
            />
            <div className="grid grid-rows-2 grid-cols-1 gap-8 h-fit w-full">
              <Image
                alt="course"
                src={"/images/perTwo.jpeg"}
                width={"10000"}
                height={"10000"}
                className=" w-full h-[300px] object-cover object-center transition-all ease-in-out duration-[300ms] rounded-[16px] "
              />
              <Image
                alt="course"
                src={"/images/perThree.jpeg"}
                width={"10000"}
                height={"10000"}
                className=" w-full h-[300px] object-cover object-center transition-all ease-in-out duration-[300ms] rounded-[16px] "
              />
            </div>
            <Image
              alt="course"
              src={"/images/perFour.jpeg"}
              width={"10000"}
              height={"10000"}
              className=" w-full h-full object-cover object-center transition-all ease-in-out duration-[300ms] rounded-[16px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
