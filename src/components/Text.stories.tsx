import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
    argTypes: {
        children: {
            description: "This is text content",
            defaultValue: "Here your Text",
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
        className: {
            name: "ClassName",
            description: "Extra ClassNames of text component",
            control: {
                type: null,
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
    size: "small",
};

export const Medium = Template.bind({});

Medium.args = {
    size: "medium",
};

export const Large = Template.bind({});

Large.args = {
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

asChild.argTypes = {
    children: {
        table: {
            disable: true,
        },
    },
};
