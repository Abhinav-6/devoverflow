import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="h-screen px-8 py-2">
            <UserButton />
            Namaste
        </div>
    );
}
