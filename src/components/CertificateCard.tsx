import { BadgeSvg } from "./svg";

const CertificateCard = () => {
  return (
    <div className="w-full p-[2rem] rounded-[16px] flex gap-4 bg-white shadow-lg items-center ">
      <BadgeSvg className="" />
      <div className="flex flex-col gap-2">
        <h5 className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[900]">
          Certification For Participation
        </h5>
        <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400]">
          Lorem ipsum dolor sit amet consectetur. Quis mauris nunc Quis mauris
          nunc Quis mauris nunc
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;
