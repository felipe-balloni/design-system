var l=Object.defineProperty;var t=(n,s)=>l(n,"name",{value:s,configurable:!0});import{B as e}from"./Button.357a375d.js";import{j as o}from"./jsx-runtime.7516d16c.js";import"./clsx.m.256e9345.js";import"./index.module.480e4b4e.js";import"./index.a70fb9de.js";import"./iframe.b7e58bd3.js";const C={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
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
`,locationsMap:{primary:{startLoc:{col:48,line:34},endLoc:{col:78,line:34},startBody:{col:48,line:34},endBody:{col:78,line:34}},"as-child":{startLoc:{col:48,line:34},endLoc:{col:78,line:34},startBody:{col:48,line:34},endBody:{col:78,line:34}}}}},title:"Components/Button",component:e,args:{children:"Create account"},argTypes:{children:{description:"This is button text",defaultValue:"Create account",name:"Text",control:{type:"text"}},className:{name:"ClassName",description:"Extra ClassNames of text component",control:{type:null}},asChild:{table:{disable:!0}}}},a=t(n=>o(e,{...n}),"Template"),y=a.bind({}),r=a.bind({});r.args={asChild:!0,children:o("a",{href:"#",className:"block text-center",children:"You can use an Anchor Tag, properties and contents when prop asChild declared."})};r.argTypes={children:{table:{disable:!0}}};const x=["Primary","asChild"];export{y as Primary,x as __namedExportsOrder,r as asChild,C as default};
//# sourceMappingURL=Button.stories.a9d46d26.js.map
