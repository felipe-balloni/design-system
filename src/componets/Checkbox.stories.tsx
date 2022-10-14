import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => (
            <div className="flex items-center space-x-2">
                {Story()}
                <Text size="small">Lembrar de mim por 30 dias</Text>
            </div>
        ),
    ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);

export const Default = Template.bind({});
