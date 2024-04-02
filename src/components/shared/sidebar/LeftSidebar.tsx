"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
    const path = usePathname();

    const [isActiveRoute, setIsActiveRoute] = useState(path);
    return (
        <div className="fixed left-0 flex w-full flex-col gap-8 pl-3 max-sm:hidden sm:max-w-16 lg:max-w-64 mt-32">
            <div className="flex flex-col gap-2">
                {sidebarLinks.map((link) => {
                    return (
                        <Button
                            variant={"ghost"}
                            onClick={() => {
                                setIsActiveRoute(link.route);
                            }}
                            key={link.label}
                            className={`flex w-full justify-start gap-2 rounded-lg px-4 py-3 text-left text-black focus:outline-none ${link.route === isActiveRoute ? "bg-orange font-bold text-white hover:bg-orange" : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800"} dark:text-white max-md:justify-center`}
                        >
                            <Image
                                src={link.imgURL}
                                width={20}
                                height={20}
                                alt="page icon"
                                className={`invert ${link.route === isActiveRoute ? "invert-0" : ""} dark:invert-0`}
                            />
                            <Link href="#" className="max-lg:hidden">
                                {link.label}
                            </Link>
                        </Button>
                    );
                })}
            </div>
            {/* <div>hello</div> */}

            <SignedOut>
                <div className="flex flex-col gap-2">
                    <div className="my-0 py-0">
                        <Button
                            variant={"ghost"}
                            className="m-0 size-full flex-1 py-4 text-center text-base font-normal text-orange hover:font-bold hover:text-orange max-md:font-normal"
                        >
                            Log In
                        </Button>
                    </div>

                    <div className="my-0 py-0">
                        <Button
                            variant={"outline"}
                            className="m-0 size-full flex-1 bg-gray-200 py-4 text-center text-base font-medium hover:font-bold dark:bg-gray-900 max-md:font-normal"
                        >
                            Signup
                        </Button>
                    </div>
                </div>
            </SignedOut>
        </div>
    );
}
