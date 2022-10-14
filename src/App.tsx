import { Button } from "./componets/Button";
import { EnvelopeIcon, EyeIcon } from "@heroicons/react/24/outline";
import { TextInput } from "./componets/TextInput";
import { Checkbox } from "./componets/Checkbox";

import "./styles/global.css";
import { Text } from "./componets/Text";

export function App() {
    return (
        <div className="App">
            <h1 className="bg-b text-2xl font-bold text-white">Hello World</h1>
            <EyeIcon className="h-6 w-6" />
            <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-8">
                <Button>Create account</Button>
                <Checkbox />
                <TextInput.Root>
                    <TextInput.Icon>
                        <EnvelopeIcon />
                    </TextInput.Icon>
                    <TextInput.Element placeholder="Type you want as placeholder" />
                </TextInput.Root>
                <Text size="large" className="font-semibold text-cyan-300">
                    This is a text
                </Text>
            </div>
        </div>
    );
}
