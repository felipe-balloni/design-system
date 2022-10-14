import { CheckIcon } from "@heroicons/react/24/outline";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

export interface CheckboxProps extends CheckboxPrimitives.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitives.Root
            {...props}
            className="h-6 w-6 rounded bg-gray-800 p-0.5 outline-none ring-cyan-300 focus:ring disabled:cursor-not-allowed disabled:bg-gray-800/30"
        >
            <CheckboxPrimitives.Indicator>
                <CheckIcon className="h-5 w-5 text-cyan-500 disabled:text-cyan-500/30" />
            </CheckboxPrimitives.Indicator>
        </CheckboxPrimitives.Root>
    );
}
