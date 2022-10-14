import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Create account",
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const AsChild: StoryObj<ButtonProps> = {
    args: {
        asChild: true,
        children: (
            <a href="#" className="block text-center">
                You can use an Anchor Tag, properties and contents when prop
                asChild.
            </a>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
};
