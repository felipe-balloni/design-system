var s=Object.defineProperty;var o=(e,l)=>s(e,"name",{value:l,configurable:!0});import{H as t}from"./Heading.3517d44c.js";import{j as a}from"./jsx-runtime.7516d16c.js";import"./index.module.480e4b4e.js";import"./index.a70fb9de.js";import"./iframe.b7e58bd3.js";import"./clsx.m.256e9345.js";const H={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
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
`,locationsMap:{small:{startLoc:{col:49,line:43},endLoc:{col:1,line:45},startBody:{col:49,line:43},endBody:{col:1,line:45}},medium:{startLoc:{col:49,line:43},endLoc:{col:1,line:45},startBody:{col:49,line:43},endBody:{col:1,line:45}},large:{startLoc:{col:49,line:43},endLoc:{col:1,line:45},startBody:{col:49,line:43},endBody:{col:1,line:45}},"as-child":{startLoc:{col:49,line:43},endLoc:{col:1,line:45},startBody:{col:49,line:43},endBody:{col:1,line:45}}}}},title:"Components/Heading",component:t,args:{children:"Heading",size:"medium"},argTypes:{children:{description:"This is heading content",defaultValue:"Here your Heading",name:"Text",control:{type:"text"}},size:{name:"Size",description:"Size of text",control:{type:"inline-radio",options:["small","medium","large"]}},className:{name:"ClassName",description:"Extra ClassNames of text component",control:{type:null}},asChild:{table:{disable:!0}}}},n=o(e=>a(t,{...e}),"Template"),r=n.bind({});r.args={size:"small"};const d=n.bind({});d.args={size:"medium"};const m=n.bind({});m.args={size:"large"};const i=n.bind({});i.args={asChild:!0,children:a("h1",{children:"You may H1 or other when prop asChild."})};i.argTypes={children:{table:{disable:!0}}};const x=["Small","Medium","Large","asChild"];export{m as Large,d as Medium,r as Small,x as __namedExportsOrder,i as asChild,H as default};
//# sourceMappingURL=Heading.stories.3201f4a9.js.map
