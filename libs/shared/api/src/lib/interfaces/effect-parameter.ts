import { ParameterValue } from './parameter-value';

export interface EffectParameter {
  name: string;
  values: ParameterValue[];
  defaultValueIndex?: number;
}
