import React from 'react'
import { MainLinearWaves } from '../../../ui/waves/startPage/mainLinearWaves/MainLinearWaves'
import { MainTopLeftWave } from '../../../ui/waves/startPage/MainTopLeftWave/MainTopLeftWave'
import { MainTopGlassWave } from '../../../ui/waves/startPage/MainTopGlassWave/MainTopGlassWave'
import { MainBottomCenterWave } from '../../../ui/waves/startPage/mainBottomCenterWave/MainBottomCenterWave'
import { MainBottomGlassCenterWave } from '../../../ui/waves/startPage/mainBottomGlassCenterWave/MainBottomGlassCenterWave'
import { MainBottomGlassRightWave } from '../../../ui/waves/startPage/MainBottomGlassRightWave/MainBottomGlassRightWave'
import { MainTopCenterWave } from '../../../ui/waves/startPage/mainTopCenterWave/MainTopCenterWave'
import { MainBottomLeftWave } from '../../../ui/waves/startPage/mainBottomLeftWave/MainBottomLeftWave'
import styles from './mainWaves.module.scss';

export const MainWaves = () => {
  return (
    <div className={styles.waves}>
      <MainLinearWaves/>
      <MainTopLeftWave/>
      <MainTopGlassWave/>
      <MainTopCenterWave/>
      <MainBottomLeftWave/>
      <MainBottomCenterWave/>
      <MainBottomGlassCenterWave/>
      <MainBottomGlassRightWave/>
    </div>
  )
}
