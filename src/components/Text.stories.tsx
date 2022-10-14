import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
    argTypes: {
        children: {
            description: "This is text content",
            name: "Text",
            control: {
                type: "text",
            },
        },
        size: {
            name: "Size",
            description: "Size of text",
            control: {
                type: "inline-radio",
                options: ["small", "medium", "large"],
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});

Small.args = {
    children: "Hello World",
    size: "small",
};

export const Medium = Template.bind({});

Medium.args = {
    children: "Hello World",
    size: "medium",
};

export const Large = Template.bind({});

Large.args = {
    children: "Hello World",
    size: "large",
};

export const asChild = Template.bind({});

asChild.args = {
    asChild: true,
    children: (
        <p>
            You may pass a HTML tag, properties and contents when prop asChild.
        </p>
    ),
};
