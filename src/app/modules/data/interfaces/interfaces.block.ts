import { BlockType } from './../types/types.block';

export interface EffectBlock {
  type: BlockType;
  theme?: string;
  title: string;
  identifier: string;
  switchable: boolean;
  params?: EffectParameter[];
}

export interface EffectParameter {
  name: string;
  values: ParameterValue[];
  defaultValueIndex?: number;
}

export interface ParameterValue {
  display: string;
  internalValue: number;
}
