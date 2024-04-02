"use client";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/constants";
import { useTheme } from "@/context/ThemeProvider";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
    const { mode } = useTheme();
    const path = usePathname();
    const [isActiveRoute, setIsActiveRoute] = useState(path);

    return (
        <>
            <Sheet>
                <SheetTrigger asChild className="hidden max-sm:block">
                    <Image
                        src="/assets/icons/hamburger.svg"
                        alt="menu icon "
                        width={20}
                        height={20}
                        className="size-8 invert dark:invert-0"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col gap-8">
                    <SheetHeader>
                        {mode === "light" ? (
                            <>
                                <Image
                                    src="/assets/images/logo-light.svg"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    className="my-0  w-32 py-0 "
                                />
                            </>
                        ) : (
                            <Image
                                src="/assets/images/logo-dark.svg"
                                alt="logo"
                                width={20}
                                height={20}
                                className="my-0  w-32 py-0 "
                            />
                        )}
                    </SheetHeader>
                    <div className="flex flex-col gap-2">
                        {sidebarLinks.map((link) => {
                            return (
                                <SheetClose
                                    onClick={() => {
                                        setIsActiveRoute(link.route);
                                    }}
                                    key={link.label}
                                    className={`flex w-full items-center gap-2 rounded-lg px-4 py-3 text-left text-black  focus:outline-none ${link.route === isActiveRoute ? "bg-orange font-bold text-white" : ""} dark:text-white`}
                                >
                                    <Image
                                        src={link.imgURL}
                                        width={20}
                                        height={20}
                                        alt="page icon"
                                        className={`invert ${link.route === isActiveRoute ? "invert-0" : ""} dark:invert-0`}
                                    />
                                    <Link href="#">{link.label}</Link>
                                </SheetClose>
                            );
                        })}
                    </div>
                    {/* <div>hello</div> */}

                    <SignedOut>
                        <div className="flex flex-col gap-2">
                            <SheetClose className="my-0 py-0">
                                <Button
                                    variant={"ghost"}
                                    className="m-0 size-full flex-1 py-4 text-center text-orange hover:font-bold hover:text-orange"
                                >
                                    Log In
                                </Button>
                            </SheetClose>

                            <SheetClose className="my-0 py-0">
                                <Button
                                    variant={"outline"}
                                    className="m-0 size-full flex-1 bg-gray-200 py-4 text-center hover:bg-gray-300 hover:font-bold"
                                >
                                    Signup
                                </Button>
                            </SheetClose>
                        </div>
                    </SignedOut>
                </SheetContent>
            </Sheet>
        </>
    );
}
