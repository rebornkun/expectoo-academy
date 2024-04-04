import Button from "@/components/Button";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="h-screen w-full bg-blue">
      <div className="container h-full px-[20px] mx-auto flex ">
        <div className="flex-[1_1_50%] w-[50%] flex flex-col justify-center gap-2 pt-[10rem] ">
          <h1 className="poppins text-[36px] leading-[60px] 2xl:text-[48px] 2xl:leading-[72px] font-[800] text-white 2xl:w-[534px]">
            Improve Your IT Skills Learning Experience{" "}
            <span className="text-darkPink">Better</span> Instantly
          </h1>
          <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white 2xl:w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Quis mauris nunc molestie
            malesuada. Nunc nisi aliquet viverra eu ut nibh sed volutpat
            rhoncus. Lorem ipsum dolor sit amet consectetur. Quis mauris nunc
            molestie malesuada. Nunc nisi aliquet viverra eu ut nibh sed
            volutpat{" "}
          </p>
          <div className="flex gap-[2rem] items-center mt-[2.5rem]">
            <Button type="nom" text="GET STARTED" link="" />
            <Button type="outline" text="BROWSE COURSE" link="" />
          </div>
        </div>
        <div className="flex-[1_1_50%] w-[50%] flex flex-col justify-end ">
          <Image
            alt="hero"
            src={"/images/academy_woman.png"}
            width={10000}
            height={10000}
            quality={100}
            priority={true}
            className="w-[70%]"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
