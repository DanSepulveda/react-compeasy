import { MouseEventHandler } from 'react';
import BasicProps from '../../types/basics';

export default interface ComponentProps extends BasicProps {
    size: number,
    shape: 'circle' | 'square' | 'rounded',
    src?: string,
    initials?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}