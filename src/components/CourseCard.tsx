const CourseCard = ({
  svg,
  heading,
  text,
}: {
  svg: React.ReactNode;
  heading: string;
  text: string;
}) => {
  return (
    <div className="bg-white border-[0.5px] border-[#00000040] rounded-[16px] px-[1rem] py-[2.5rem] flex flex-col gap-4 items-center justify-center w-[250px] flex-1 min-w-[250px] md:max-w-[300px] ">
      {svg}
      <h5 className=" poppins text-centerP text-[16px] leading-[20px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#2C2B2BD9]">
        {heading}
      </h5>
      <p className="text-center text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-[#2D2D2D] ">
        {text}
      </p>
    </div>
  );
};

export default CourseCard;
