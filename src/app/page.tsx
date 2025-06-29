import { EventSection } from "~/components/EventSection";
import { Footer } from "~/components/Footer";
import { HeroSection } from "~/components/HeroSection";
import { InfoSection } from "~/components/InfoSection";
import { Navbar } from "~/components/Navbar";
import { PartnerSection } from "~/components/PartnerSection";
import { TestimonialSection } from "~/components/TestimonialSection";
import { VolunteerSection } from "~/components/VolunteerSection";

export default function Home() {
    return (
        <div className="w-full h-full">
            <Navbar />
            <HeroSection />
            <InfoSection />
            <EventSection />
            <VolunteerSection />
            <TestimonialSection />
            <PartnerSection />
            <Footer />
        </div>
    );
}
