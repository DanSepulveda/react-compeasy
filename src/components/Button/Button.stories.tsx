import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Basics/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    children: 'Enviar',
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Enviar',
    variant: 'filled',
    size: 15,
    color: 'cyan-500'
}

export const FilledOutlined = Template.bind({});
FilledOutlined.args = {
    children: 'Enviar',
    variant: 'filled-outlined',
    color: 'orange-600',
}

export const Outline = Template.bind({});
Outline.args = {
    children: 'Enviar',
    variant: 'outlined',
    size: 25,
    color: 'esmerald-700'
}

export const OutlinedFilled = Template.bind({});
OutlinedFilled.args = {
    children: 'Enviar',
    variant: 'outlined-filled',
    color: 'rose-800',
    size: 50,
    rounded: true,
}