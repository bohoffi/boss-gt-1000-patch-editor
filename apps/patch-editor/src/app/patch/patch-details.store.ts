import { signalStore, withComputed } from '@ngrx/signals';
import { withRouteParams } from '@bgtpe/shared/state';
import { computed, inject } from '@angular/core';
import { LivesetStore } from '../library/liveset.store';

export const PatchDetailsStore = signalStore(
  withRouteParams({
    patchId: (param) => param || '',
  }),
  withComputed(({ patchId }, livesetStore = inject(LivesetStore)) => ({
    patch: computed(() => livesetStore.entityMap()[patchId()] || undefined),
  }))
);
