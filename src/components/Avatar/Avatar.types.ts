import { MouseEventHandler } from 'react';
import BasicProps from '../../types/basics';
import { Shape } from '../../types/components.types';

export default interface ComponentProps extends BasicProps {
    size?: number,
    shape?: Shape
    src?: string,
    initials?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}