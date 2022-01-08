import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { AiOutlineSend } from 'react-icons/ai'

export default {
    title: "Basics/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

const IconLeft: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>
        <AiOutlineSend />
        Send
    </Button>
)
const IconRight: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>
        Send
        <AiOutlineSend />
    </Button>
)

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: 'Send',
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Send',
    variant: 'filled',
    size: 15,
    color: 'cyan-500'
}

export const FilledOutlined = Template.bind({});
FilledOutlined.args = {
    children: 'Send',
    variant: 'filled-outlined',
    color: 'orange-600',
}

export const Outline = Template.bind({});
Outline.args = {
    children: 'Send',
    variant: 'outlined',
    size: 25,
    color: 'esmerald-700'
}

export const OutlinedFilled = Template.bind({});
OutlinedFilled.args = {
    children: 'Send',
    variant: 'outlined-filled',
    color: 'rose-800',
    size: 50,
    rounded: true,
}

export const LeftIcon = IconLeft.bind({})
LeftIcon.args = {
    color: 'red-700',
    rounded: true
}

export const RightIcon = IconRight.bind({})
LeftIcon.args = {
    color: 'red-700',
    rounded: true
}