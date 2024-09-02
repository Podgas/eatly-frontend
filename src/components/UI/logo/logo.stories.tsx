import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
    title: "UI/Logo",
    component: Logo,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    args: {},
};

export const NoText: Story = {
    args: {
        showText: false,
    },
};
