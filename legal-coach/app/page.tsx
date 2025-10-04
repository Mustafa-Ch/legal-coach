import Advantages from "@/components/Advantages"
import FAQ from "@/components/FAQ"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"

const page = () => {
  return (
    <div className="bg-[#F0F4FA] w-full min-h-screen pt-3">
      <Hero />
      <Features />
      <Pricing />
      <Advantages bottom={7} left={36} w="220px" />
      <FAQ />
    </div>
  );
}

export default page
