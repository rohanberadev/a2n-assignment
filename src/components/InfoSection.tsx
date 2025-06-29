"use client";

import Image from "next/image";
import { donationImage, doveImage, teamWorkImage } from "~/constants/images";

export function InfoSection() {
    return (
        <section className="py-16 px-6 md:px-20 font-poppins bg-gray-200">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl leading-snug text-gray-900 mb-6">
                        Your support can allow us to reach maximum communities
                        and raise awareness about our activities.
                    </h2>
                    <div className="w-14 h-1 bg-orange-500 mb-4"></div>
                    <p className="text-gray-500">
                        By donating you are helping us convert our initiatives
                        into a long term solution for the communities.
                    </p>
                </div>

                {/* Right Stats */}
                <div className="flex items-end justify-between text-center max-md:text-sm">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <Image
                            src={teamWorkImage}
                            alt="team work image"
                            width={60}
                            height={60}
                        />
                        <h3 className="text-2xl font-bold text-gray-900">
                            12K+
                        </h3>
                        <p className="text-gray-500 mt-1">People helped</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <Image
                            src={donationImage}
                            alt="team work image"
                            width={80}
                            height={80}
                        />
                        <h3 className="text-2xl font-bold text-gray-900">
                            4.9k+
                        </h3>
                        <p className="text-gray-500 mt-1">Initiatives 2024</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <Image
                            src={doveImage}
                            alt="team work image"
                            width={60}
                            height={60}
                        />
                        <h3 className="text-2xl font-bold text-gray-900">
                            100+
                        </h3>
                        <p className="text-gray-500 mt-1">Volunteers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
