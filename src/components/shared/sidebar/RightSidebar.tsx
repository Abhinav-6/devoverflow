import Image from "next/image";

export default function RightSidebar() {
    const arr = [
        `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. In blanditiis tenetur quaerat recusandae odio?
    Quos nobis optio sequi aut delectus?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. In blanditiis tenetur quaerat recusandae odio?
    Quos nobis optio sequi aut delectus?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. In blanditiis tenetur quaerat recusandae odio?
    Quos nobis optio sequi aut delectus?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. In blanditiis tenetur quaerat recusandae odio?
    Quos nobis optio sequi aut delectus?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. In blanditiis tenetur quaerat recusandae odio?
    Quos nobis optio sequi aut delectus?`,
    ];
    const tags = [
        { language: "Next.js", count: 28 },
        { language: "React.js", count: 28 },
        { language: "C", count: 28 },
        { language: "TypeScript", count: 28 },
        { language: "Express.js", count: 20 },
        { language: "Node.js", count: 20 },
        { language: "Golang", count: 20 },
    ];
    return (
        <aside className="sticky right-0 mt-32 flex w-[400px] max-w-64 flex-col gap-8 px-4 max-lg:hidden">
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Top questions</h2>
                <div className="flex flex-col items-center gap-3">
                    {arr.map((text, index) => {
                        return (
                            <div
                                key={index}
                                className="flex gap-4 rounded px-2 hover:bg-slate-100 dark:hover:bg-slate-900"
                            >
                                <p className="line-clamp-2 text-wrap break-words font-sans text-base ">
                                    {text}
                                </p>
                                <Image
                                    width={20}
                                    height={20}
                                    src="/assets/icons/chevron-right.svg"
                                    alt="left icon"
                                    className="size-5 invert dark:invert-0"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-bold">Popular tags</h2>
                {tags.map((tag) => {
                    return (
                        <div
                            key={tag.language}
                            className="flex justify-between gap-1 px-2"
                        >
                            <p className="text-medium text-gray-500 dark:text-gray-600">
                                {tag.language}
                            </p>
                            <p>{tag.count}</p>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
