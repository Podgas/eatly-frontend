import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
    title: "UI/Button",

    component: Button,
    tags: ["autodocs"],

    argTypes: {
        label: { control: "text" },
        variant: { control: "select" },
        size: { control: "select" },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Primary Button",
        variant: "primary",
        size: "md",
    },
};
