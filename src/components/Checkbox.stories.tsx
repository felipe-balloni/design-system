import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => (
            <label id="l1" htmlFor="c1" className="flex items-center space-x-2">
                {Story()}
                <Text size="small" className="text-gray-200">
                    Lembrar de mim por 30 dias
                </Text>
            </label>
        ),
    ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox id="c1" aria-labelledby="l1" {...args} />
);

export const Default = Template.bind({});
