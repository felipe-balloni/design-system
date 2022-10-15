var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{C as t}from"./Checkbox.abf725f4.js";import{T as l}from"./Text.f28cc0f6.js";import{a as s,j as n}from"./jsx-runtime.7516d16c.js";import"./index.module.480e4b4e.js";import"./index.a70fb9de.js";import"./iframe.b7e58bd3.js";import"./index.961b7036.js";import"./clsx.m.256e9345.js";const y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => (
            <label id="l1" htmlFor="c1" className="flex items-center gap-2">
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
`,locationsMap:{default:{startLoc:{col:50,line:20},endLoc:{col:1,line:22},startBody:{col:50,line:20},endBody:{col:1,line:22}}}}},title:"Components/Checkbox",component:t,decorators:[e=>s("label",{id:"l1",htmlFor:"c1",className:"flex items-center gap-2",children:[e(),n(l,{size:"small",className:"text-gray-200",children:"Lembrar de mim por 30 dias"})]})]},m=o(e=>n(t,{id:"c1","aria-labelledby":"l1",...e}),"Template"),k=m.bind({}),T=["Default"];export{k as Default,T as __namedExportsOrder,y as default};
//# sourceMappingURL=Checkbox.stories.4f8ca8fb.js.map
