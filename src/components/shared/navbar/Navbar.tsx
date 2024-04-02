"use client";
import { useTheme } from "@/context/ThemeProvider";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

export default function Navbar() {
    const { mode } = useTheme();
    return (
        <nav className="fixed z-50 flex w-full items-center justify-between gap-4 bg-white px-4 py-3 dark:bg-background md:px-8 md:py-5 lg:px-16 lg:py-7">
            <div>
                <Link href="/">
                    <Image
                        src="/assets/images/site-logo.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="my-0 w-8 py-0 lg:hidden"
                    />
                    {mode === "light" ? (
                        <Image
                            src="/assets/images/logo-light.svg"
                            alt="logo"
                            width={20}
                            height={20}
                            className="my-0 hidden w-32 py-0 lg:block"
                        />
                    ) : (
                        <Image
                            src="/assets/images/logo-dark.svg"
                            alt="logo"
                            width={20}
                            height={20}
                            className="my-0 hidden w-32 py-0 lg:block"
                        />
                    )}
                </Link>
            </div>
            <div className="hidden w-full max-w-md gap-1 rounded-lg border-2 border-gray-400 px-2 focus-within:border-2 lg:flex">
                <Image
                    width={20}
                    height={20}
                    src="/assets/icons/search.svg"
                    alt="search icon"
                />
                <Input className="border-0 focus:outline-none focus:ring-0"></Input>
            </div>

            <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                <Theme />
                {/* <div className="outline ">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div> */}

                <MobileNav />
            </div>
        </nav>
    );
}
