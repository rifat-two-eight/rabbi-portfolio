import Hero from "@/components/Home/hero";
import Stats from "@/components/Home/Stats";
import MyStory from "@/components/Home/MyStory";
import Tools from "@/components/Home/Tools";
import Portfolio from "@/components/Home/Portfolio";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Hero />
      <Stats />
      <MyStory />
      <Tools />
      <Portfolio />
    </div>
  );
}