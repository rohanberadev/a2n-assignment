import Image from "next/image";
import {
    a2nLogoImage,
    partner2Image,
    travelCosmicLogoImage,
    trickySolutionLogoImage,
} from "~/constants/images";

export function PartnerSection() {
    return (
        <section className="w-full py-16 px-6 md:px-28 font-poppins bg-gray-100">
            <h2 className="text-3xl md:text-4xl leading-snug text-[#175978] mb-6 font-semibold">
                Our Partners
            </h2>
            <div className="w-14 h-1 bg-orange-500 mb-12"></div>

            <div className="grid grid-cols-4 items-center justify-center gap-x-8 px-8">
                <Image
                    src={a2nLogoImage}
                    alt="a2n logo"
                    width={200}
                    height={200}
                />
                <Image
                    src={trickySolutionLogoImage}
                    alt="tricky solution logo"
                    width={200}
                    height={200}
                />
                <Image
                    src={travelCosmicLogoImage}
                    alt="travel cosmic logo"
                    width={200}
                    height={200}
                />
                <Image
                    src={partner2Image}
                    alt="partner 2 logo"
                    width={100}
                    height={100}
                    className="object-center"
                />
            </div>
        </section>
    );
}
