import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EffectBlock } from 'shared-api';
import { distortion1, distortion2 } from 'shared-effects';

@Component({
  selector: 'bgt-pe-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
  // blocks: { switchable: boolean; title: string; theme: string }[] = [
  blocks: EffectBlock[] = [
    // {
    //   title: 'Amp',
    //   theme: 'theme-amp'
    // },
    // {
    //   title: 'Chorus',
    //   theme: 'theme-chorus'
    // },
    // {
    //   title: 'Compressor',
    //   theme: 'theme-comp'
    // },
    // {
    //   title: 'Delay',
    //   theme: 'theme-delay'
    // },
    // {
    //   switchable: true,
    //   title: 'Distortion',
    //   theme: 'theme-ds'
    distortion1,
    distortion2,
    // },
    // {
    //   title: 'EQ',
    //   theme: 'theme-eq'
    // },
    // {
    //   title: 'FX',
    //   theme: 'theme-fx'
    // },
    // {
    //   title: 'Looper',
    //   theme: 'theme-looper'
    // },
    // {
    //   switchable: false,
    //   title: 'Master',
    //   theme: 'theme-master'
    // },
    // {
    //   title: 'Noise Gate',
    //   theme: 'theme-noise-gate'
    // },
    // {
    //   title: 'Reverb',
    //   theme: 'theme-reverb'
    // },
    // {
    //   title: 'Send Return',
    //   theme: 'theme-send-return'
    // }
  ];
}
