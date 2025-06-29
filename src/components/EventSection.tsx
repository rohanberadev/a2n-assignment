import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import {
    covid19Image,
    educationImage,
    environmentImage,
    furryFriendImage,
    nutritionImage,
    rationImage,
} from "~/constants/images";

const eventItems = [
    {
        title: "Empowering Through Education",
        imageSrc: educationImage,
        imageAlt: "chidren in school",
        description:
            "We provide access to quality education for underprivileged children.",
    },
    {
        title: "Nourishing Every Child",
        imageSrc: nutritionImage,
        imageAlt: "children eating food",
        description: "Helping children grow strong with healthy food support.",
    },
    {
        title: "Protecting Our Planet",
        imageSrc: environmentImage,
        imageAlt: "children eating food",
        description: "We work to restore nature and promote sustainability.",
    },
    {
        title: "Covid-19 Relief Meals",
        imageSrc: covid19Image,
        imageAlt: "children eating food",
        description:
            "Distributing essential food supplies to families affected by Covid-19.",
    },
    {
        title: "Ration Support Drive",
        imageSrc: rationImage,
        imageAlt: "children eating food",
        description:
            "Delivering essential groceries and supplies during tough times.",
    },
    {
        title: "Protecting Street Animals",
        imageSrc: furryFriendImage,
        imageAlt: "children eating food",
        description:
            "Providing food, shelter, and medical care to stray animals.",
    },
];

export function EventSection() {
    return (
        <section className="w-full py-16 px-6 md:px-28 font-poppins">
            <div>
                <h2 className="text-3xl md:text-4xl leading-snug text-[#175978] mb-6 font-semibold">
                    Our Work
                </h2>
                <div className="w-14 h-1 bg-orange-500 mb-4"></div>
            </div>

            <div className="w-full max-lg:flex max-lg:flex-col grid grid-cols-2 grid-rows-3 gap-4">
                {eventItems.map((item, index) => (
                    <EventCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                    />
                ))}
            </div>
        </section>
    );
}

export function EventCard({
    imageSrc,
    imageAlt,
    title,
    description,
}: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}) {
    return (
        <Card className="border-none shadow-none flex-row gap-0 py-4 w-full">
            <CardContent className="w-fit">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={400}
                    height={400}
                    className="object-cover rounded-sm"
                />
            </CardContent>
            <CardHeader className="px-0 max-lg:text-sm w-full">
                <CardTitle>
                    <p className="lg:text-nowrap text-[#175978]">{title}</p>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    );
}
