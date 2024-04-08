import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="container h-full px-[20px] py-[8rem] mx-auto flex ">
        <div className="w-full h-full flex max-md:flex-col gap-[4rem] 2xl:gap-[6rem] items-center  ">
          <div className="w-[50%] flex-[1_1_50%] flex flex-col w-full gap-8">
            <Image
              alt="course"
              src={"/images/about.jpeg"}
              width={"10000"}
              height={"10000"}
              className="w-full max-xl:h-[400px] h-full object-cover transition-all ease-in-out duration-[300ms] rounded-[16px] group-hover/card:scale-[1.1]"
            />
          </div>
          <div className="max-md:w-full w-[50%] flex-[1_1_50%] flex gap-4 flex-col">
            <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-pink">
              OUR BEST CATEGORY
            </h5>
            <div className="flex flex-col gap-2">
              <h3 className="text-[25px] poppins leading-[36px] 2xl:text-[38px] 2xl:leading-[57px] font-[800] text-blue w-full max-w-[300px] 2xl:max-w-[450px] ">
                Expectoo Learning Become an Instructor
              </h3>
              <div className="stick h-[4px] w-[80px] bg-blue "></div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400]">
                Lorem ipsum dolor sit amet consectetur. Quis mauris nunc
                molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
                volutpat rhoncus. Lorem ipsum dolor sit amet consectetur. Quis
                mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut
                nibh sed volutpat Lorem ipsum dolor sit amet consectetur. Quis
                mauris nunc molestie malesuada. Nunc nisi aliquet viverra eu ut
                nibh sed volutpat rhoncus. Lorem ipsum dolor sit amet
                consectetur. Quis mauris nunc molestie malesuada. Nunc nisi
                aliquet viverra eu ut nibh sed volutpat
              </p>
              <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400]">
                rhoncus. Lorem ipsum dolor sit amet consectetur. Quis mauris
                nunc{" "}
                <b>
                  molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
                  volutpat
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
