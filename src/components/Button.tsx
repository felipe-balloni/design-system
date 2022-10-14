import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({
    children,
    asChild,
    className,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            className={clsx(
                "w-full cursor-pointer rounded bg-cyan-500 py-4 px-2 text-sm font-semibold text-gray-900 outline-none ring-cyan-300 ring-offset-4 ring-offset-[color:var(--my-var)] transition-colors duration-200 hover:bg-cyan-300 focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-800/30 disabled:text-black/40",
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}
