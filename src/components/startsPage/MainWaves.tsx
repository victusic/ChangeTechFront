'use client';
import {
  MainBottomCenterWave,
  MainBottomGlassCenterWave,
  MainBottomGlassRightWave,
  MainBottomLeftWave,
  MainLinearWaves,
  MainTopCenterWave,
  MainTopGlassWave,
  MainTopLeftWave,
} from '@/ui';

export const MainWaves = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <MainLinearWaves />
      <MainTopLeftWave />
      <MainTopGlassWave />
      <MainTopCenterWave />
      <MainBottomLeftWave />
      <MainBottomCenterWave />
      <MainBottomGlassCenterWave />
      <MainBottomGlassRightWave />
    </div>
  );
};
