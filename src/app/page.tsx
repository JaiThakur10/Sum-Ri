import BgGradient from "@/components/common/bg-gradient";
import CtaSection from "@/components/home/cta-section";
import DemoSection from "@/components/home/demo-section";
import Herosection from "@/components/home/hero-section";
import HowItWorks from "@/components/home/how-it-works";
import PricingSection from "@/components/home/pricing-section";

export default function Home() {
  return (
    <div className=" relative w-full">
      <BgGradient />
      <div className=" flex flex-col">
        <Herosection />
        <DemoSection />
        <HowItWorks />
        <PricingSection />
        <CtaSection />
      </div>
    </div>
  );
}
