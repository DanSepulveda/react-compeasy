import { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { ColorName, Intensity } from '../../../types/color.types'
import { Shape } from '../../../types/components.types'
import ComponentProps from '../Avatar.types'

export interface AvatarProps extends ComponentProps {
    size: number,
    shape: Shape,
    src?: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
    className?: string,
    color: ColorName,
    intensity: Intensity,
    textColor: 50 | 700,
}

const StyledAvatar = styled.div<AvatarProps>`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: ${props => props.shape === 'circle' ? '100%' : props.shape === 'rounded' ? '5px' : '0px'};
    background-color: ${props => `rgb(var(--${props.color}))`};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    text-transform: uppercase;
    font-size: ${props => `${props.size / 2}px`};
    color: ${props => `rgb(var(--${props.textColor}))`};
    ${props => props.src && `
        background-image: url(${props.src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `}
    ${props => props.onClick ? 'cursor: pointer;' : null}
`
export default StyledAvatar