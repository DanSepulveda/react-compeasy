import React, { MouseEventHandler } from 'react'
import BasicProps from '../../types/basics'
import { Variant, ButtonType } from '../../types/components.types'

export default interface ComponentProps extends BasicProps {
    children?: React.ReactNode,
    variant?: Variant,
    size?: number,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    rounded?: boolean,
    label?: string,
    type?: ButtonType,
}