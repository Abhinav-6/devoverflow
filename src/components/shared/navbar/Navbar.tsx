"use client";
import { useTheme } from "@/context/ThemeProvider";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Theme from "./Theme";

export default function Navbar() {
    const { mode } = useTheme();
    return (
        <nav className="flex w-full justify-between px-16 py-8">
            <div>
            
                {mode === "light" ? (
                    <Image
                        src="/assets/images/logo-light.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="my-0 w-32 py-0 "
                    />
                ) : (
                    <Image
                        src="/assets/images/logo-dark.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="my-0 w-32 py-0   "
                    />
                )}
            </div>
            <div className="flex items-center gap-4">
                <Theme />
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="redirect" />
                </SignedOut>
            </div>
        </nav>
    );
}
