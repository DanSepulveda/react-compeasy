import React from 'react'
import styled from 'styled-components'
import { Variant } from '../../../types/button.types'
import { ColorName, Intensity } from '../../../types/color.types'

interface ButtonProps {
    variant: Variant,
    size: number,
    onClick?: React.ReactNode,
    disabled: boolean,
    rounded: boolean,
    color: ColorName,
    intensity: Intensity,
    textColor: 50 | 700,
}

const StyledButton = styled.button<ButtonProps>`
    margin: 0 auto;
    padding: 0.5em 1em;
    border-radius: ${props => props.rounded ? '4em' : '4px'};
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
    letter-spacing: 1px;
    transition: all .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 10px;
    font-size: ${props => `${props.size}px`};

    color: ${props => props.variant.startsWith('outlined')
        ? `rgb(var(--${props.color}-${props.intensity}))`
        : `rgb(var(--${props.color}-${props.textColor}))`};


    border: ${props => props.variant.startsWith('outlined')
        ? `1px solid rgba(var(--${props.color}-${props.intensity}), 0.6)`
        : '1px solid transparent'};

    background-color: ${props => props.variant.startsWith('filled')
        ? `rgb(var(--${props.color}-${props.intensity}))`
        : 'transparent'};

    > svg{
        font-size: ${props => `${props.size + 10}px`};

        fill: ${props => props.variant.startsWith('outlined')
        ? `rgb(var(--${props.color}-${props.intensity}))`
        : `rgb(var(--${props.color}-${props.textColor}))`};

        transition: all .3s ease;
    }

    :hover{
        background-color: ${props => props.variant.endsWith('outlined')
        ? `rgba(var(--${props.color}-${props.intensity}), 0.08)`
        : `rgba(var(--${props.color}-${props.intensity}), 0.85)`};
        border: ${props => props.variant.endsWith('outlined')
        ? `1px solid rgb(var(--${props.color}-${props.intensity}))`
        : '1px solid transparent'};
        color: ${props => props.variant.endsWith('filled')
        ? `rgb(var(--${props.color}-${props.textColor}))`
        : `rgb(var(--${props.color}-${props.intensity}))`}
    }

    :hover svg{
        fill: ${props => props.variant.endsWith('filled')
        ? `rgb(var(--${props.color}-${props.textColor}))`
        : `rgb(var(--${props.color}-${props.intensity}))`}
    }

    :active{
        background-color: ${props => props.variant === 'outlined'
        ? `rgba(var(--${props.color}-${props.intensity}), 0.3)`
        : `rgba(var(--${props.color}-${props.intensity}), 0.7)`};
    }
    
    &[disabled]{
        cursor: default;
        pointer-events: none;
        user-select: none;

        color: ${props => props.variant.startsWith('outlined')
        ? 'rgb(var(--gray-300))'
        : 'rgb(var(--gray-50))'};

        border: ${props => props.variant.startsWith('outlined')
        ? '1px solid rgba(var(--gray-200), 0.6)'
        : '1px solid transparent'};

        background-color: ${props => props.variant.startsWith('filled')
        ? `rgb(var(--gray-300))`
        : 'transparent'};
    }
`

export default StyledButton