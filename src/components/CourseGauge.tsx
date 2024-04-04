import { CounterGuageSvg } from "./svg";

const CourseGauge = () => {
  return (
    <div className="w-[80%] p-[2rem] rounded-[16px] flex flex-col gap-6 bg-white shadow-lg ">
      <Gauge heading="Fullstack" percentage={80} />
      <Gauge heading="Product Design" percentage={75} />
      <Gauge heading="Data Science" percentage={55} />
    </div>
  );
};

export default CourseGauge;

const Gauge = ({
  heading,
  percentage,
}: {
  heading: string;
  percentage: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[800]">
        {heading}
      </h5>
      <div className="w-full h-[10px] rounded-[24px] bg-[#EC268F33] flex justify-start">
        <div
          style={{ width: `${percentage}%` }}
          className={`w-[${percentage}%] bg-[#EC268F] rounded-[24px] relative transition-all duration-[300ms] ease-in-out `}
        >
          <div className="countergCon absolute right-[-25px] bottom-[10px] m-auto">
            <CounterGuageSvg className="" />
            <p className="absolute top-[15%] left-0 right-0 m-auto w-fit text-[10px] leading-[12px] 2xl:text-[12px] 2xl:leading-[14px] font-[500] text-white">
              {percentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
