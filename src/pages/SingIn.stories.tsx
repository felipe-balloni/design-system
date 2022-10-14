import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SingIn } from "./SingIn";

export default {
    title: "Pages/SingIn",
    component: SingIn,
} as ComponentMeta<typeof SingIn>;

const Template: ComponentStory<typeof SingIn> = (args) => <SingIn />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
        canvas.getByLabelText("Endereço de e-mail"),
        "usuario-exemplo@exemple.com"
    );

    userEvent.type(canvas.getByLabelText("Sua senha"), "123456");

    userEvent.click(canvas.getByRole("checkbox"));

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
        expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
};
