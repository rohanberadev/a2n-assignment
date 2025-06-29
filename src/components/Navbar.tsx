"use client";

import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { hamburgerIconImage } from "~/constants/images";
import { AppLogo } from "./AppLogo";
import { Button } from "./ui/button";

export const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about-us",
    },
    {
        label: "Donation",
        href: "/donation",
    },
    {
        label: "Become A Volunteer",
        href: "/become-a-voluteer",
    },
    {
        label: "Programs",
        subItems: [
            { label: "Empowering Through Education" },
            { label: "No Child Hungry" },
            { label: "Nourishing Our Furry Friends" },
            { label: "Protecting Our Coastlines" },
        ],
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Contact Us",
        href: "/contact-us",
    },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-full flex items-center justify-between py-4 px-8">
            <Link href="/">
                <AppLogo width={96} height={96} />
            </Link>

            <WindowNavigation />

            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: open ? 0 : "100%", opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-full h-full z-50"
            >
                <MobileNavigation closeNav={() => setOpen(false)} />
            </motion.div>

            <Button variant={"default"} className="bg-orange-500 max-lg:hidden">
                Tax Benefit
            </Button>

            <Image
                src={hamburgerIconImage}
                alt="hamburger icon"
                width={20}
                height={20}
                className="lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
            />
        </div>
    );
}

function MobileNavigation({ closeNav }: { closeNav: () => void }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 right-0 z-50 h-full w-[250px] bg-white px-8 pt-24 shadow-lg lg:hidden">
            <X
                size={28}
                className="absolute right-8 top-8 cursor-pointer"
                onClick={closeNav}
            />

            <div className="text-base space-y-4">
                {navItems.map((item, index) =>
                    item.subItems ? (
                        <div key={`mob_item-${index}`}>
                            <div
                                className="font-semibold text-gray-900 flex items-center gap-1 cursor-default"
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                {item.label}
                                <motion.div
                                    animate={{ rotate: open ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={16} />
                                </motion.div>
                            </div>

                            {open && (
                                <ul className="mt-2 text-sm text-gray-700">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={`mob_sub_item-${subIndex}`}>
                                            <Link
                                                href=""
                                                className="w-fit block p-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                                            >
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <Link
                            key={`mob_item-${index}`}
                            href={item.href ?? ""}
                            className="block font-semibold text-gray-900"
                        >
                            {item.label}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}

function WindowNavigation() {
    return (
        <NavigationMenu className="font-semibold max-lg:hidden">
            <NavigationMenuList className="gap-x-8">
                {navItems.map((item, index) =>
                    item.subItems ? (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger className="font-semibold">
                                {item.label}
                            </NavigationMenuTrigger>

                            <NavigationMenuContent className="w-fit font-normal">
                                <ul className="grid gap-2 p-4">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href=""
                                                    className="block px-4 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink asChild>
                                <Link href={item.href}>{item.label}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
