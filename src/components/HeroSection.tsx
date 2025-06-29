"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
    return (
        <div className="w-full bg-[url('/assets/hero-image.jpg')] bg-cover bg-center h-[300px] md:h-[400px] lg:h-[550px] flex items-center relative">
            {/* <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#7f5539]/80 via-[#b08968]/40 to-transparent pointer-events-none z-10"></div> */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl z-20 md:text-4xl lg:text-6xl font-bold text-left text-white dark:text-white font-sans tracking-tight ml-8 max-md:mt-5"
            >
                Bringing <span className="text-orange-500">Hope</span>
                <br />
                where it{"'"}s needed{" "}
                <span className="text-orange-500">Most</span>
            </motion.div>
            <Button className="bg-orange-500 absolute bottom-[20%] lg:bottom-[25%] ml-8 z-20 lg:p-6 text-sm py-1 px-2 lg:text-lg rounded-none font-sans">
                Scan & Donate
            </Button>
        </div>
    );
}
