import { Patch } from './patch';

export interface Liveset {
  name: string;
  revision: string;
  device: string;
  patches: Patch[];
}
