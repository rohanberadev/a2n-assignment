import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";
import { userIconImage } from "~/constants/images";
import { Card, CardContent } from "./ui/card";

const carouselItems = [
    {
        quote: "I get to use my skills to directly impact the lives of those in need, and I'm surrounded by passionate colleagues who share my values.",
        author: "Rujuta Shah",
    },
    {
        quote: "Volunteering with Nishant Charitable Trust has shown me the power of community. It's amazing to see how people from all walks of life come together to support a common cause. It's a truly collaborative and inspiring environment.",
        author: "Shradha Pawar",
    },
    {
        quote: "Working at Nishant Charitable Trust has been incredibly rewarding. Seeing the impact, we have on underprivileged children's education and well-being is truly inspiring. It's more than just a job; it's a chance to make a real difference in their lives.",
        author: "Janice Pinto",
    },
    {
        quote: "Witnessing the joy on the faces of the children I work with as they learn and grow makes every moment worthwhile. I'm proud to be a part of an NGO that empowers underprivileged children and gives them a brighter future.",
        author: "Shruti Naik",
    },
    {
        quote: "Here at the NGO, it isn't just a volunteer organization; it's a family. The staff and volunteers share a common goal of making a difference, and that it creates a special bond. It's a truly supportive and welcoming environment.",
        author: "Pratik Malap",
    },
    {
        quote: "I wasn't sure what to expect when I started volunteering at the NGO, but I quickly found myself surrounded by amazing people who share my passion for helping others.",
        author: "Callista Dias",
    },
];

export function TestimonialSection() {
    return (
        <section className="w-full py-16 px-6 md:px-28 font-poppins">
            <h2 className="text-3xl md:text-4xl leading-snug text-[#175978] mb-6 font-semibold">
                Testimonials
            </h2>
            <div className="w-14 h-1 bg-orange-500 mb-12"></div>

            <div className="w-full h-full flex justify-center items-center">
                <Carousel className="w-full h-full max-w-4xl">
                    <CarouselContent className="w-full h-full">
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} className="h-full">
                                <div className="p-1 h-full">
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col justify-between p-6 gap-4">
                                            {/* Quote */}
                                            <p className="text-base italic text-gray-600">
                                                {'"'}
                                                {item.quote}
                                                {'"'}
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-4 mt-4">
                                                <Image
                                                    src={userIconImage}
                                                    alt="User Avatar"
                                                    width={50}
                                                    height={50}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900">
                                                        {item.author}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Volunteer
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="max-lg:hidden" />
                    <CarouselNext className="max-lg:hidden" />
                </Carousel>
            </div>
        </section>
    );
}
