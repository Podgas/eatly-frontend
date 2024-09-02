import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./textField";

const meta: Meta<typeof TextField> = {
    title: "UI/TextField",

    component: TextField,
    tags: ["autodocs"],

    argTypes: {
        label: {
            control: {
                type: "text",
            },
        },
        value: {
            control: {
                type: "text",
            },
        },
        onChange: {
            action: "onChange",
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        error: {
            control: {
                type: "boolean",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Outlined: Story = {
    args: {},
};
