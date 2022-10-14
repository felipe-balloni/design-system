import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Create account",
    },
    argTypes: {
        children: {
            description: "This is button text",
            defaultValue: "Create account",
            name: "Text",
            control: {
                type: "text",
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const asChild = Template.bind({});

asChild.args = {
    asChild: true,
    children: (
        <a href="#" className="block text-center">
            You can use an Anchor Tag, properties and contents when prop asChild
            declared.
        </a>
    ),
};

asChild.argTypes = {
    children: {
        table: {
            disable: true,
        },
    },
};
