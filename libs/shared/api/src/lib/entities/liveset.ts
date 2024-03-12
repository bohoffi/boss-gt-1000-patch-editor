import { FilePatch, Patch } from './patch';

export interface Liveset {
  name: string;
  revision: string;
  device: string;
  patches: Patch[];
}

export interface FileLiveset extends Pick<Liveset, 'name' | 'device'> {
  formatRev: string;
  data: [FilePatch[], [], [], []];
}
