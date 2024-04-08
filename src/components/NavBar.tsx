"use client";
import Link from "next/link";
import { LogoSvg } from "./svg";
import Button from "./Button";
import { usePathname } from "next/navigation";

const NavBar = () => {
  return (
    <nav className="w-full h-[90px] fixed top-[50px] z-[1000] px-[20px] ">
      <div className="bg-white shadow container w-full h-full mx-auto flex rounded-[16px]  ">
        <div className="w-full h-full flex items-center px-[29px] py-[19px] justify-between ">
          <LogoSvg className="" />
          <div className="flex flex-row gap-[2rem] max-md:hidden">
            <NavItem link="/" text="HOME" />
            <NavItem link="/courses" text="COURSES" />
            <NavItem link="/about_us" text="ABOUT US" />
            <NavItem link="/contact_us" text="CONTACT US" />
          </div>
          <Button type="nom" text="JOIN US" link="" className="max-md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const NavItem = ({ text, link }: { text: string; link: string }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={link}
      className={`poppins text-[12px] leading-[16px] 2xl:text-[14px] 2xl:leading-[21px] font-[600] ${
        pathname === link ? "text-blue" : "text-grey"
      }`}
    >
      {text}
    </Link>
  );
};
