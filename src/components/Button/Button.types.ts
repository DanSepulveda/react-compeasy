import { MouseEventHandler } from "react";
import BasicProps from "../../types/basics";

export default interface ComponentProps extends BasicProps {
    children?: any,
    variant?: 'filled' | 'outlined' | 'filled-outlined' | 'outlined-filled',
    size?: number,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    rounded?: boolean,
    label: string
}