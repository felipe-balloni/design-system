import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
    children: React.ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex h-12 items-center gap-3 rounded bg-gray-800 py-4 px-3 ring-cyan-300 focus-within:ring">
            {props.children}
        </div>
    );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
    children: React.ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return <Slot className="h-auto w-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputElementProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextInputElement(props: TextInputElementProps) {
    return (
        <input
            className="flex-1 bg-transparent text-sm text-gray-100 caret-cyan-300 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:text-gray-100/30 disabled:placeholder-gray-400/30"
            {...props}
        />
    );
}

TextInputElement.displayName = "TextInput.Element";

export const TextInput = {
    Root: TextInputRoot,
    Element: TextInputElement,
    Icon: TextInputIcon,
};
