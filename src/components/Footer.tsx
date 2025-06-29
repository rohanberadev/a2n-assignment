import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    facebookLogoImage,
    instagramLogoImage,
    linkedinLogoImage,
    twitterLogoImage,
} from "~/constants/images";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
    return (
        <footer className="h-full md:h-[400px] w-full bg-[#175978] bg-cover md:grid md:grid-cols-3 gap-8 md:grid-rows-1 md:justify-center md:items-center lg:px-16 flex flex-col py-8">
            <div className="flex flex-col gap-y-6 h-full justify-center px-8">
                <h1 className="text-2xl font-bold text-orange-500">
                    Quick Links
                </h1>

                <ul className="text-white text-sm flex flex-col gap-y-2">
                    <li>
                        <Link
                            className="flex items-center gap-x-1 hover:text-orange-500"
                            href=""
                        >
                            <ChevronRight size={16} />
                            Donate Now
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center gap-x-1 hover:text-orange-500"
                            href=""
                        >
                            <ChevronRight size={16} />
                            Become a Volunteer
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center gap-x-1 hover:text-orange-500"
                            href=""
                        >
                            <ChevronRight size={16} />
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center gap-x-1 hover:text-orange-500"
                            href=""
                        >
                            <ChevronRight size={16} />
                            Terms and Conditions
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center gap-x-1 hover:text-orange-500"
                            href=""
                        >
                            <ChevronRight size={16} />
                            Refunds and Return policy
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-y-6 h-full justify-center px-8">
                <p className="text-white w-full">
                    Nishant Charitable Trust exists to rescue children from all
                    forms of exploitation by engaging and sustaining them in
                    education.
                </p>

                <h1 className="text-xl text-orange-500 font-bold">
                    CONNECT WITH US:
                </h1>

                <div className="flex items-center gap-x-4">
                    <Link href="">
                        <Image
                            src={facebookLogoImage}
                            alt="facebook logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src={twitterLogoImage}
                            alt="twitter logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src={instagramLogoImage}
                            alt="instagram logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src={linkedinLogoImage}
                            alt="linkedin logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-y-6 h-full justify-center px-8">
                <h1 className="text-2xl text-orange-500 font-bold">
                    Join This Newsletter
                </h1>

                <Input
                    className="bg-white h-10 text-lg"
                    placeholder="Your email here..."
                />

                <Button className="bg-orange-500 py-5 text-sm">
                    SUBSCRIBE NOW
                </Button>
            </div>
        </footer>
    );
}
