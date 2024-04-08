import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";

const page = () => {
  return (
    <div className="w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default page;
