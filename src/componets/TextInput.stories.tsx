import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "./TextInput";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default {
    title: "Components/TextInput",
    component: TextInput.Root,
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof TextInput.Root>;

const Template: ComponentStory<typeof TextInput.Root> = (args) => (
    <TextInput.Root {...args}></TextInput.Root>
);

export const WithIcon = Template.bind({});

WithIcon.args = {
    children: [
        <TextInput.Icon>
            <EnvelopeIcon />
        </TextInput.Icon>,
        <TextInput.Element
            placeholder="Type you want as placeholder"
            disabled
        />,
    ],
};

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
    children: <TextInput.Element placeholder="Type you want as placeholder" />,
};
