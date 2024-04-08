import FifthSection from "./sections/FifthSection";
import FirstSection from "./sections/FirstSection";
import ForthSection from "./sections/ForthSection";
import SecondSection from "./sections/SecondSection";
import SeventhSection from "./sections/SeventhSection";
import SixthSection from "./sections/SixthSection";
import ThirdSection from "./sections/ThirdSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </main>
  );
}
