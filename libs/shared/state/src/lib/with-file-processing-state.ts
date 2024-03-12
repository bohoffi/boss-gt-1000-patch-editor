import { computed } from '@angular/core';
import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';

export type FileProcessingState =
  | 'idle'
  | 'processing'
  | 'success'
  | { error: string };

type ProcessingState = {
  state: FileProcessingState;
};

export function withFileProcessingState() {
  return signalStoreFeature(
    withState<ProcessingState>({
      state: 'idle',
    }),
    withComputed(({ state }) => ({
      isProcessing: computed(() => state() === 'processing'),
      isSuccessful: computed(() => state() === 'success'),
      error: computed(() => {
        const status = state();
        return typeof status === 'object' ? status.error : null;
      }),
    }))
  );
}

export function setProcessing(): ProcessingState {
  return {
    state: 'processing',
  };
}

export function setSuccessful(): ProcessingState {
  return {
    state: 'success',
  };
}

export function setError(error: string): ProcessingState {
  return {
    state: {
      error,
    },
  };
}
