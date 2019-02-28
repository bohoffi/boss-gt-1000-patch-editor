import { EffectBlock } from '../interfaces';
import { generateParamValues } from 'app/modules/utils/generators';

export const distortion1: EffectBlock = {
    identifier: 'DS 1',
    title: 'Distortion 1',
    theme: 'theme-ds',
    switchable: true,
    type: 'distortion',
    params: [
        {
            name: 'GAIN',
            values: generateParamValues(0, 120),
            defaultValueIndex: 50
        },
        {
            name: 'TONE',
            values: generateParamValues(-50, 50),
            defaultValueIndex: 50
        },
        {
            name: 'LEVEL',
            values: generateParamValues(0, 100),
            defaultValueIndex: 50
        },
        {
            name: 'BOTTOM',
            values: generateParamValues(-50, 50),
            defaultValueIndex: 50
        },
        {
            name: 'DIRECT MIX',
            values: generateParamValues(0, 100),
            defaultValueIndex: 0
        },
        {
            name: 'SOLO SW',
            values: [
                {
                    display: 'OFF',
                    internalValue: 0
                },
                {
                    display: 'ON',
                    internalValue: 1
                }
            ],
            defaultValueIndex: 0
        },
        {
            name: 'SOLO LEVEL',
            values: generateParamValues(0, 100),
            defaultValueIndex: 50
        }
    ]
};
export const distortion2: EffectBlock = {
    identifier: 'DS 2',
    title: 'Distortion 2',
    theme: 'theme-ds',
    switchable: true,
    type: 'distortion',
    params: [
        {
            name: 'GAIN',
            values: generateParamValues(0, 120),
            defaultValueIndex: 50
        },
        {
            name: 'TONE',
            values: generateParamValues(-50, 50),
            defaultValueIndex: 50
        },
        {
            name: 'LEVEL',
            values: generateParamValues(0, 100),
            defaultValueIndex: 50
        },
        {
            name: 'BOTTOM',
            values: generateParamValues(-50, 50),
            defaultValueIndex: 50
        },
        {
            name: 'DIRECT MIX',
            values: generateParamValues(0, 100),
            defaultValueIndex: 0
        },
        {
            name: 'SOLO SW',
            values: [
                {
                    display: 'OFF',
                    internalValue: 0
                },
                {
                    display: 'ON',
                    internalValue: 1
                }
            ],
            defaultValueIndex: 0
        },
        {
            name: 'SOLO LEVEL',
            values: generateParamValues(0, 100),
            defaultValueIndex: 50
        }
    ]
};
