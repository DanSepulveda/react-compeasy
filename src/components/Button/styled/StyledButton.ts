import styled from 'styled-components'
import { Variant } from '../../../types/button.types'
import { AllColors, TextColor } from '../../../types/color.types'

interface ButtonProps {
    variant: Variant,
    size: number,
    rounded: boolean,
    color: AllColors,
    textColor: TextColor,
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
        ? `rgb(var(--${props.color}))`
        : `rgb(var(--${props.textColor}))`};

    border: ${props => props.variant.startsWith('outlined')
        ? `1px solid rgba(var(--${props.color}), 0.6)`
        : '1px solid transparent'};

    background-color: ${props => props.variant.startsWith('filled')
        ? `rgb(var(--${props.color}))`
        : 'transparent'};

    > svg{
        font-size: ${props => `${props.size + 10}px`};
        fill: ${props => props.variant.startsWith('outlined')
        ? `rgb(var(--${props.color}))`
        : `rgb(var(--${props.textColor}))`};
        transition: all .5s ease;
    }

    :hover{
        background-color: ${props => props.variant.endsWith('outlined')
        ? `rgba(var(--${props.color}), 0.08)`
        : `rgba(var(--${props.color}), 0.85)`};
        border: ${props => props.variant.endsWith('outlined')
        ? `1px solid rgb(var(--${props.color}))`
        : '1px solid transparent'};
        color: ${props => props.variant.endsWith('filled')
        ? `rgb(var(--${props.textColor}))`
        : `rgb(var(--${props.color}))`}
    }

    :hover svg{
        fill: ${props => props.variant.endsWith('filled')
        ? `rgb(var(--${props.textColor}))`
        : `rgb(var(--${props.color}))`}
    }

    :active{
        background-color: ${props => props.variant === 'outlined'
        ? `rgba(var(--${props.color}), 0.3)`
        : `rgba(var(--${props.color}), 0.7)`};
    }
    
    &[disabled]{
        cursor: default;
        pointer-events: none;
        user-select: none;
    }
`

export default StyledButton