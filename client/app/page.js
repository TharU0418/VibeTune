import About from "@/components/About";
import Description from "@/components/Description";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="bg-custom-green overflow-hidden">
    <Navbar/>
    <Welcome/>
    <div className="relative">
      <Description/>
      <About/>
    </div>
    </div>
  );
}
