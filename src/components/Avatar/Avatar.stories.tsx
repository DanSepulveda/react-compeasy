import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";

export default {
    title: "Basics/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    initials: 'daniel sepulveda',
};

export const FotoAvatar = Template.bind({});
FotoAvatar.args = {
    src: 'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg',
    size: 100
};

export const Rounded = Template.bind({})
Rounded.args = {
    initials: 'hello world',
    shape: 'rounded',
    color: 'teal-500',
    size: 80
}

export const Square = Template.bind({})
Square.args = {
    shape: 'square',
    src: 'https://sm.ign.com/t/ign_latam/news/n/netflixs-a/netflixs-avatar-the-last-airbender-the-entire-cast-of-the-li_fsek.1280.jpg',
    size: 90
}