"use client";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    // MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

export default function Theme() {
    const { mode, setMode } = useTheme();
    return (
        <>
            <Menubar className="mx-0 cursor-pointer border-0  text-white">
                <MenubarMenu>
                    <MenubarTrigger>
                        {mode === "light" ? (
                            <Image
                                src="/assets/icons/sun.svg"
                                alt="sun icon"
                                width={30}
                                height={30}
                            />
                        ) : (
                            <Image
                                src="/assets/icons/moon.svg"
                                alt="moon icon"
                                width={30}
                                height={30}
                            />
                        )}
                    </MenubarTrigger>
                    <MenubarContent className="absolute -right-8 max-w-16">
                        <MenubarItem
                            className={`flex items-center gap-4 ${mode === "light" ? "bg-secondary" : ""}`}
                            onClick={() => {
                                setMode("light");
                            }}
                        >
                            <Image
                                src="/assets/icons/sun.svg"
                                alt="sun icon"
                                width={20}
                                height={20}
                            />
                            <p className="font-semibold">Light</p>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem
                            className={`flex items-center gap-4 ${mode === "dark" ? "bg-secondary" : ""}`}
                            onClick={() => {
                                setMode("dark");
                            }}
                        >
                            <Image
                                src="/assets/icons/moon.svg"
                                alt="moon icon"
                                width={20}
                                height={20}
                            />
                            <p className="font-semibold">Dark</p>
                        </MenubarItem>
                        {/* <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem> */}
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
