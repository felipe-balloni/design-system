var p=Object.defineProperty;var e=(o,r)=>p(o,"name",{value:r,configurable:!0});import{T as t,E as c}from"./TextInput.63f6bec4.js";import{j as n}from"./jsx-runtime.7516d16c.js";import"./index.a70fb9de.js";import"./iframe.b7e58bd3.js";import"./index.module.480e4b4e.js";const T={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
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
`,locationsMap:{"with-icon":{startLoc:{col:56,line:17},endLoc:{col:1,line:19},startBody:{col:56,line:17},endBody:{col:1,line:19}},"without-icon":{startLoc:{col:56,line:17},endLoc:{col:1,line:19},startBody:{col:56,line:17},endBody:{col:1,line:19}}}}},title:"Components/TextInput",component:t.Root,argTypes:{children:{table:{disable:!0}}}},l=e(o=>n(t.Root,{...o}),"Template"),a=l.bind({});a.args={children:[n(t.Icon,{children:n(c,{})}),n(t.Element,{placeholder:"Type you want as placeholder",disabled:!0})]};const i=l.bind({});i.args={children:n(t.Element,{placeholder:"Type you want as placeholder"})};const x=["WithIcon","WithoutIcon"];export{a as WithIcon,i as WithoutIcon,x as __namedExportsOrder,T as default};
//# sourceMappingURL=TextInput.stories.1ac2558e.js.map
