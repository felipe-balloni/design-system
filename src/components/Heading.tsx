import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({
    size = "medium",
    children,
    asChild,
    className,
}: HeadingProps) {
    const Comp = asChild ? Slot : "h2";
    return (
        <Comp
            className={clsx(
                "font-sans text-gray-100",
                {
                    "text-xs": size === "small",
                    "text-sm": size === "medium",
                    "text-md": size === "large",
                },
                className
            )}
        >
            {children}
        </Comp>
    );
}
