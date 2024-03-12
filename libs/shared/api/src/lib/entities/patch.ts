export interface Patch {
  id: string;
  name: string;
  metadata: Record<string, string>;
}

export interface FilePatch {
  memo: string;
  paramSet: ParamSet;
}

interface ParamSet {
  'User_patch%common': string[];
  'User_patch%stompBox': string[];
  'User_patch%led': string[];
  'User_patch%assign(1)': string[];
  'User_patch%assign(2)': string[];
  'User_patch%assign(3)': string[];
  'User_patch%assign(4)': string[];
  'User_patch%assign(5)': string[];
  'User_patch%assign(6)': string[];
  'User_patch%assign(7)': string[];
  'User_patch%assign(8)': string[];
  'User_patch%assign(9)': string[];
  'User_patch%assign(10)': string[];
  'User_patch%assign(11)': string[];
  'User_patch%assign(12)': string[];
  'User_patch%assign(13)': string[];
  'User_patch%assign(14)': string[];
  'User_patch%assign(15)': string[];
  'User_patch%assign(16)': string[];
  'User_patch%efct': string[];
  'User_patch%efctB': string[];
  'User_patch%comp': string[];
  'User_patch%dist(1)': string[];
  'User_patch%dist(2)': string[];
  'User_patch%preamp(1)': string[];
  'User_patch%preamp(2)': string[];
  'User_patch%ns(1)': string[];
  'User_patch%ns(2)': string[];
  'User_patch%eq(1)': string[];
  'User_patch%eq(2)': string[];
  'User_patch%eq(3)': string[];
  'User_patch%eq(4)': string[];
  'User_patch%delay(1)': string[];
  'User_patch%delay(2)': string[];
  'User_patch%delay(3)': string[];
  'User_patch%delay(4)': string[];
  'User_patch%mstDelay': string[];
  'User_patch%chorus': string[];
  'User_patch%fx(1)%fx': string[];
  'User_patch%fx(1)%fxAGSim': string[];
  'User_patch%fx(1)%fxAcReso': string[];
  'User_patch%fx(1)%fxAWah': string[];
  'User_patch%fx(1)%fxChorus': string[];
  'User_patch%fx(1)%fxCVibe': string[];
  'User_patch%fx(1)%fxComp': string[];
  'User_patch%fx(1)%fxDefretter': string[];
  'User_patch%fx(1)%fxFeedbacker': string[];
  'User_patch%fx(1)%fxFlanger': string[];
  'User_patch%fx(1)%fxHarmonist': string[];
  'User_patch%fx(1)%fxHumanizer': string[];
  'User_patch%fx(1)%fxOctave': string[];
  'User_patch%fx(1)%fxOvertone': string[];
  'User_patch%fx(1)%fxPan': string[];
  'User_patch%fx(1)%fxPhaser': string[];
  'User_patch%fx(1)%fxPitchShift': string[];
  'User_patch%fx(1)%fxRingMod': string[];
  'User_patch%fx(1)%fxRotary': string[];
  'User_patch%fx(1)%fxSitarSim': string[];
  'User_patch%fx(1)%fxSlicer': string[];
  'User_patch%fx(1)%fxSlowGear': string[];
  'User_patch%fx(1)%fxSoundHold': string[];
  'User_patch%fx(1)%fxSBend': string[];
  'User_patch%fx(1)%fxTremolo': string[];
  'User_patch%fx(1)%fxTWah': string[];
  'User_patch%fx(1)%fxVibrato': string[];
  'User_patch%fx(2)%fx': string[];
  'User_patch%fx(2)%fxAGSim': string[];
  'User_patch%fx(2)%fxAcReso': string[];
  'User_patch%fx(2)%fxAWah': string[];
  'User_patch%fx(2)%fxChorus': string[];
  'User_patch%fx(2)%fxCVibe': string[];
  'User_patch%fx(2)%fxComp': string[];
  'User_patch%fx(2)%fxDefretter': string[];
  'User_patch%fx(2)%fxFeedbacker': string[];
  'User_patch%fx(2)%fxFlanger': string[];
  'User_patch%fx(2)%fxHarmonist': string[];
  'User_patch%fx(2)%fxHumanizer': string[];
  'User_patch%fx(2)%fxOctave': string[];
  'User_patch%fx(2)%fxOvertone': string[];
  'User_patch%fx(2)%fxPan': string[];
  'User_patch%fx(2)%fxPhaser': string[];
  'User_patch%fx(2)%fxPitchShift': string[];
  'User_patch%fx(2)%fxRingMod': string[];
  'User_patch%fx(2)%fxRotary': string[];
  'User_patch%fx(2)%fxSitarSim': string[];
  'User_patch%fx(2)%fxSlicer': string[];
  'User_patch%fx(2)%fxSlowGear': string[];
  'User_patch%fx(2)%fxSoundHold': string[];
  'User_patch%fx(2)%fxSBend': string[];
  'User_patch%fx(2)%fxTremolo': string[];
  'User_patch%fx(2)%fxTWah': string[];
  'User_patch%fx(2)%fxVibrato': string[];
  'User_patch%fx(3)%fx': string[];
  'User_patch%fx(3)%fxAGSim': string[];
  'User_patch%fx(3)%fxAcReso': string[];
  'User_patch%fx(3)%fxAWah': string[];
  'User_patch%fx(3)%fxChorus': string[];
  'User_patch%fx(3)%fxCVibe': string[];
  'User_patch%fx(3)%fxComp': string[];
  'User_patch%fx(3)%fxDefretter': string[];
  'User_patch%fx(3)%fxFeedbacker': string[];
  'User_patch%fx(3)%fxFlanger': string[];
  'User_patch%fx(3)%fxHarmonist': string[];
  'User_patch%fx(3)%fxHumanizer': string[];
  'User_patch%fx(3)%fxOctave': string[];
  'User_patch%fx(3)%fxOvertone': string[];
  'User_patch%fx(3)%fxPan': string[];
  'User_patch%fx(3)%fxPhaser': string[];
  'User_patch%fx(3)%fxPitchShift': string[];
  'User_patch%fx(3)%fxRingMod': string[];
  'User_patch%fx(3)%fxRotary': string[];
  'User_patch%fx(3)%fxSitarSim': string[];
  'User_patch%fx(3)%fxSlicer': string[];
  'User_patch%fx(3)%fxSlowGear': string[];
  'User_patch%fx(3)%fxSoundHold': string[];
  'User_patch%fx(3)%fxSBend': string[];
  'User_patch%fx(3)%fxTremolo': string[];
  'User_patch%fx(3)%fxTWah': string[];
  'User_patch%fx(3)%fxVibrato': string[];
  'User_patch%reverb': string[];
  'User_patch%pedalFx': string[];
  'User_patch2%stompBox': string[];
  'User_patch2%fx1ChorusBass': string[];
  'User_patch2%fx1FlangerBass': string[];
  'User_patch2%fx2ChorusBass': string[];
  'User_patch2%fx2FlangerBass': string[];
  'User_patch2%fx3ChorusBass': string[];
  'User_patch2%fx3FlangerBass': string[];
  'User_patch2%efct': string[];
  'User_patch3%stompBox': string[];
  'User_patch3%fx(4)%fx': string[];
  'User_patch3%fx4AGSim': string[];
  'User_patch3%fx4AcReso': string[];
  'User_patch3%fx4AWah': string[];
  'User_patch3%fx4Chorus': string[];
  'User_patch3%fx4CVibe': string[];
  'User_patch3%fx4Comp': string[];
  'User_patch3%fx4Defretter': string[];
  'User_patch3%fx4Feedbacker': string[];
  'User_patch3%fx4Flanger': string[];
  'User_patch3%fx4Harmonist': string[];
  'User_patch3%fx4Humanizer': string[];
  'User_patch3%fx4Octave': string[];
  'User_patch3%fx4Overtone': string[];
  'User_patch3%fx4Pan': string[];
  'User_patch3%fx4Phaser': string[];
  'User_patch3%fx4PitchShift': string[];
  'User_patch3%fx4RingMod': string[];
  'User_patch3%fx4Rotary': string[];
  'User_patch3%fx4SitarSim': string[];
  'User_patch3%fx4Slicer': string[];
  'User_patch3%fx4SlowGear': string[];
  'User_patch3%fx4SoundHold': string[];
  'User_patch3%fx4SBend': string[];
  'User_patch3%fx4Tremolo': string[];
  'User_patch3%fx4TWah': string[];
  'User_patch3%fx4Vibrato': string[];
  'User_patch3%fx4ChorusBass': string[];
  'User_patch3%fx4FlangerBass': string[];
  'User_patch3%fx1Dist': string[];
  'User_patch3%fx2Dist': string[];
  'User_patch3%fx3Dist': string[];
  'User_patch3%fx4Dist': string[];
  'User_patch2%mstDelay': string[];
  'User_patch3%fx1MasterFx': string[];
  'User_patch3%fx2MasterFx': string[];
  'User_patch3%fx3MasterFx': string[];
  'User_patch3%fx4MasterFx': string[];
}
