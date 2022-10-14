import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "Heading",
        size: "medium",
    },
    argTypes: {
        size: {
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
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: "small",
    },
};

export const Medium: StoryObj<HeadingProps> = {};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: "large",
    },
};

export const AsChild: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: <h1>You may H1 or other when prop asChild.</h1>,
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
};
