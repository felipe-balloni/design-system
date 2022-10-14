import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "Heading",
        size: "medium",
    },
    argTypes: {
        children: {
            description: "This is heading content",
            defaultValue: "Here your Heading",
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
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args} />
);

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
    children: <h1>You may H1 or other when prop asChild.</h1>,
};

asChild.argTypes = {
    children: {
        table: {
            disable: true,
        },
    },
};
