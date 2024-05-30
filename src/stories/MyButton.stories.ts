import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["components", "button"],
  args: { onClick: fn(), variant: "default", size: "default" },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg", "icon"],
      },
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "sm",
  },
};
