import { BlockType } from '../types/block-type';
import { EffectParameter } from './effect-parameter';

export interface EffectBlock {
  type: BlockType;
  theme?: string;
  title: string;
  identifier: string;
  switchable: boolean;
  params?: EffectParameter[];
}
