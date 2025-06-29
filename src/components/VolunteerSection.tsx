import Image from "next/image";
import { nctTeamImage } from "~/constants/images";
import { Button } from "./ui/button";

export function VolunteerSection() {
    return (
        <section className="w-full py-16 px-4 md:px-28 font-poppins flex max-lg:flex-col items-center justify-between h-full border-y-1 border-orange-500 bg-orange-50 relative gap-y-8">
            <div className="w-full lg:w-1/3 z-10 max-md:flex max-md:flex-col">
                <h2 className="text-3xl md:text-4xl leading-snug text-[#175978] mb-6 font-semibold">
                    Our Volunteers
                </h2>
                <div className="w-14 h-1 bg-orange-500 mb-12"></div>

                <div className="flex flex-col gap-y-8 w-full max-md:items-center max-md:px-4">
                    <p>
                        Our team of volunteers plays a crucial role in
                        supporting underprivileged children{"'"}s education and
                        providing essential services to vulnerable communities.
                        You can help us in making a positive difference in
                        society by being a part of this.
                    </p>

                    <Button className="bg-orange-500 w-fit py-6">
                        Become A Volunteer
                    </Button>
                </div>
            </div>

            <Image
                src={nctTeamImage}
                alt="nct team"
                width={600}
                height={400}
                className="z-10"
            />
        </section>
    );
}
