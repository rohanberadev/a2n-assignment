import { HeroSection } from "~/components/HeroSection";
import { InfoSection } from "~/components/InfoSection";
import { Navbar } from "~/components/Navbar";

export default function Home() {
    return (
        <div className="w-full h-full">
            <Navbar />
            <HeroSection />
            <InfoSection />
        </div>
    );
}
