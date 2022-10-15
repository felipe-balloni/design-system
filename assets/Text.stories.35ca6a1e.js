var i=Object.defineProperty;var t=(n,s)=>i(n,"name",{value:s,configurable:!0});import{T as o}from"./Text.f28cc0f6.js";import{j as a}from"./jsx-runtime.7516d16c.js";import"./index.module.480e4b4e.js";import"./index.a70fb9de.js";import"./iframe.b7e58bd3.js";import"./clsx.m.256e9345.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
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
`,locationsMap:{small:{startLoc:{col:46,line:39},endLoc:{col:74,line:39},startBody:{col:46,line:39},endBody:{col:74,line:39}},medium:{startLoc:{col:46,line:39},endLoc:{col:74,line:39},startBody:{col:46,line:39},endBody:{col:74,line:39}},large:{startLoc:{col:46,line:39},endLoc:{col:74,line:39},startBody:{col:46,line:39},endBody:{col:74,line:39}},"as-child":{startLoc:{col:46,line:39},endLoc:{col:74,line:39},startBody:{col:46,line:39},endBody:{col:74,line:39}}}}},title:"Components/Text",component:o,argTypes:{children:{description:"This is text content",defaultValue:"Here your Text",name:"Text",control:{type:"text"}},size:{name:"Size",description:"Size of text",control:{type:"inline-radio",options:["small","medium","large"]}},className:{name:"ClassName",description:"Extra ClassNames of text component",control:{type:null}},asChild:{table:{disable:!0}}}},e=t(n=>a(o,{...n}),"Template"),r=e.bind({});r.args={size:"small"};const d=e.bind({});d.args={size:"medium"};const c=e.bind({});c.args={size:"large"};const l=e.bind({});l.args={asChild:!0,children:a("p",{children:"You may pass a HTML tag, properties and contents when prop asChild."})};l.argTypes={children:{table:{disable:!0}}};const C=["Small","Medium","Large","asChild"];export{c as Large,d as Medium,r as Small,C as __namedExportsOrder,l as asChild,h as default};
//# sourceMappingURL=Text.stories.35ca6a1e.js.map
