import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { Liveset, Patch } from '@bgtpe/shared/api';
import { loadTslFile } from '@bgtpe/shared/file-processing';
import {
  setError,
  setProcessing,
  setSuccessful,
  withFileProcessingState,
} from '@bgtpe/shared/state';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { filter, pipe, switchMap, tap } from 'rxjs';

type LivesetState = {
  liveset: Pick<Liveset, 'name' | 'revision' | 'device'> | undefined;
};

export const LivesetStore = signalStore(
  { providedIn: 'root' },
  withState<LivesetState>({
    liveset: undefined,
  }),
  withEntities<Patch>(),
  withFileProcessingState(),
  withComputed(({ entities, liveset }) => ({
    livesetLoaded: computed(() => !!liveset),
    patches: computed(() => entities()),
  })),
  withDevtools('Liveset'),
  withMethods((store) => ({
    loadTslFile: rxMethod<File>(
      pipe(
        filter(Boolean),
        tap(() => patchState(store, setProcessing())),
        switchMap((file) =>
          loadTslFile(file).pipe(
            tapResponse({
              next: ({ name, device, revision, patches }) => {
                patchState(
                  store,
                  {
                    liveset: {
                      name,
                      device,
                      revision,
                    },
                  },
                  setAllEntities(patches),
                  setSuccessful()
                );
              },
              error: (error) => {
                patchState(store, setError(error as string));
              },
            })
          )
        )
      )
    ),
  }))
);
