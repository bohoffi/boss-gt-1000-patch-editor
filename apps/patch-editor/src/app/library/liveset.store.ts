import { computed } from '@angular/core';
import { Liveset, Patch } from '@bgtpe/shared/api';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withState,
} from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';

type LivesetState = {
  liveset: Pick<Liveset, 'name' | 'revision' | 'device'> | undefined;
};

export const LivesetStore = signalStore(
  { providedIn: 'root' },
  withState<LivesetState>({
    liveset: undefined,
  }),
  withEntities<Patch>(),
  withComputed(({ entities }) => ({
    patches: computed(() => entities()),
  })),
  withHooks((store) => ({
    onInit() {
      const { patches, ...liveset } = loadLiveset();
      patchState(
        store,
        {
          liveset,
        },
        setAllEntities(patches)
      );
    },
  }))
);

function loadLiveset(): Liveset {
  return {
    name: '20240114',
    revision: '0008',
    device: 'GT-1000',
    patches: [
      {
        id: 'U01-1',
        name: 'Patch 1',
      },
      {
        id: 'U01-2',
        name: 'Patch 2',
      },
      {
        id: 'U01-3',
        name: 'Patch 3',
      },
      {
        id: 'U01-4',
        name: 'Patch 4',
      },
      {
        id: 'U01-5',
        name: 'Patch 5',
      },
      {
        id: 'U02-1',
        name: 'Patch 6',
      },
      {
        id: 'U02-2',
        name: 'Patch 7',
      },
      {
        id: 'U02-3',
        name: 'Patch 8',
      },
      {
        id: 'U02-4',
        name: 'Patch 9',
      },
      {
        id: 'U02-5',
        name: 'Patch 10',
      },
      {
        id: 'U03-1',
        name: 'Patch 11',
      },
      {
        id: 'U03-2',
        name: 'Patch 12',
      },
      {
        id: 'U03-3',
        name: 'Patch 13',
      },
      {
        id: 'U03-4',
        name: 'Patch 14',
      },
      {
        id: 'U03-5',
        name: 'Patch 15',
      },
      {
        id: 'U04-1',
        name: 'Patch 16',
      },
      {
        id: 'U04-2',
        name: 'Patch 17',
      },
      {
        id: 'U04-3',
        name: 'Patch 18',
      },
      {
        id: 'U04-4',
        name: 'Patch 19',
      },
      {
        id: 'U04-5',
        name: 'Patch 20',
      },
      {
        id: 'U05-1',
        name: 'Patch 21',
      },
      {
        id: 'U05-2',
        name: 'Patch 22',
      },
      {
        id: 'U05-3',
        name: 'Patch 23',
      },
      {
        id: 'U05-4',
        name: 'Patch 24',
      },
      {
        id: 'U05-5',
        name: 'Patch 25',
      },
    ],
  };
}
