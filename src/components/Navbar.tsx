import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
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
    return (
        <div className="w-full flex items-center justify-between py-4 px-8">
            <Link href="/">
                <AppLogo width={96} height={96} />
            </Link>

            <NavigationMenu className="font-semibold">
                <NavigationMenuList className="gap-x-8">
                    {navItems.map((item, index) =>
                        item.subItems ? (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuTrigger className="font-semibold">
                                    {item.label}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="w-fit font-normal">
                                    <ul className="grid gap-2 p-4">
                                        {item.subItems.map(
                                            (subItem, subIndex) => (
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
                                            )
                                        )}
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

            <Button variant={"default"} className="bg-orange-500">
                Tax Benefit
            </Button>
        </div>
    );
}
