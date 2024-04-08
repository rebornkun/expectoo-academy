import Link from "next/link";
import { FacebookSvg, LinkedlnSvg, LogoWhiteSvg, TwitterSvg } from "./svg";

const QuickLinks = [
  {
    title: "About Us",
    link: "",
  },
  {
    title: "Contact Us",
    link: "",
  },
  {
    title: "FAQs",
    link: "",
  },
  {
    title: "For Instructors",
    link: "",
  },
  {
    title: "For Students",
    link: "",
  },
];
const Courses = [
  {
    title: "Fullstack Development",
    link: "",
  },
  {
    title: "Product Design",
    link: "",
  },
  {
    title: "Data Science",
    link: "",
  },
  {
    title: "Cyber Security",
    link: "",
  },
];
const FollowUs = [
  {
    title: "Twitter",
    link: "",
    logo: <TwitterSvg className="" />,
  },
  {
    title: "LinkedIn",
    link: "",
    logo: <LinkedlnSvg className="" />,
  },
  {
    title: "Facebook",
    link: "",
    logo: <FacebookSvg className="" />,
  },
];
const Footer = () => {
  return (
    <footer className="w-full bg-blue relative">
      <div className="container h-full px-[20px] py-[3rem] mx-auto flex flex-col gap-24 justify-between relative z-[2] w-full ">
        <div className="flex flex-col gap-6 w-full">
          <LogoWhiteSvg className="" />
          <div className="flex justify-between w-full flex-wrap max-md:gap-16 gap-14">
            <div>
              <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white w-[300px]">
                Quis mauris nunc molestie malesuada. Nunc nisi aliquet viverra
                eu ut nibh sed volutpat{" "}
              </p>
            </div>
            <FooterList title="Quick Links" data={QuickLinks} />
            <FooterList title="Courses" data={Courses} />
            <FooterList title="Follow Us:" data={FollowUs} />
          </div>
        </div>
        <div>
          <p className="text-[12px] leading-[16px] 2xl:text-[14px] 2xl:leading-[21px] font-[400] text-white">
            @ Copyright 2024{" "}
            <span className="font-[700]">
              Exp<span className="text-pink">ec</span>too
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterList = ({
  title,
  data,
}: {
  title: string;
  data: { title: string; link: string; logo?: React.ReactNode }[];
}) => {
  return (
    <div className="flex flex-col gap-6 poppins w-full max-md:max-w-[100%] max-w-[35%] xl:max-w-[15%]">
      <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[700] text-white">
        {title}
      </p>
      {data?.map((datum, index) => {
        return (
          <Link
            key={index}
            href={datum.link}
            className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-white flex gap-2 items-center"
          >
            {datum.logo && <span>{datum.logo}</span>}
            {datum.title}
          </Link>
        );
      })}
    </div>
  );
};
