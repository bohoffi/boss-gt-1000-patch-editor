import { ParameterValue } from '@data/interfaces';

export const generateParamValues = (min: number, max: number, step = 1): ParameterValue[] => {
    const len = Math.floor((max - min) / step) + 1;
    return Array(len).fill({}).map((_, idx) => {
        const val = min + (idx * step);
        return {
            display: `${val}`,
            internalValue: val
        };
    });
};
