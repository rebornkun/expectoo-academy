import Image from "next/image";

const InstructorCard = ({
  img,
  heading,
  text,
}: {
  img: string;
  heading: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-[0.8rem] items-center flex-1 w-[200px] min-w-[200px] max-w-[230px] 2xl:max-w-[300px] ">
      <div className="bg-white rounded-[16px] h-[250px] 2xl:h-[275px] overflow-hidden w-full">
        <Image
          alt="instructor"
          src={img}
          width={10000}
          height={10000}
          quality={100}
          priority={true}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h5 className=" poppins text-centerP text-[16px] leading-[20px] 2xl:text-[20px] 2xl:leading-[30px] font-[600] text-[#000000]">
        {heading}
      </h5>
      <p className="text-center text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[20px] font-[600] text-[#00000080] mt-[-5px] ">
        {text}
      </p>
    </div>
  );
};

export default InstructorCard;
