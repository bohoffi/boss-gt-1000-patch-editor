import { BlockType } from './../types/types.block';

export interface EffectBlock {
  type: BlockType;
  theme?: string;
  title: string;
  identifier: string;
  switchable: boolean;
}
