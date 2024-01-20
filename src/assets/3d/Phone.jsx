import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PhoneModel(props) {
  const { nodes, materials } = useGLTF('./models/phone/phone.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.025, 0, 0]}scale={0.365}>
        <group position={[0, -8, 0]}>
          <mesh geometry={nodes.SSwNHydlPxsUYYx.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.GoKkDPUheDuuSeZ.geometry} material={materials.FjQZkOEFcAMgVKb} />
          <mesh geometry={nodes.LLCOsMNMwTSiaFM_0.geometry} material={materials.jUggraQHQxDJpnM} />
          <mesh geometry={nodes.mCHktZAFyMAJfef.geometry} material={materials.XioMmaZGUXvxXPb} />
          <mesh geometry={nodes.dhklRpTwbkGOiTk.geometry} material={materials.fexrCBexEqONlzJ} />
          <mesh geometry={nodes.ffAKcDPUgFPpzDm.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.rhWSVMrzmgmACdq.geometry} material={materials.GoEESZWjCZpqeOD} />
          <mesh geometry={nodes.TpYiAaTOnMgRFmX_0.geometry} material={materials.pAavhFVnCAgSnSH} />
          <mesh geometry={nodes.kkKyyQuSQljBsvq.geometry} material={materials.GCTfChbRIgBmWbe} />
          <mesh geometry={nodes.fmPCLkRSemlQWac.geometry} material={materials.PLMruZnLcxoCgNt} />
          <mesh geometry={nodes.YPoKloEgOhaAHnb.geometry} material={materials.loFcbeOTkLALGur} />
          <mesh geometry={nodes.ySMlAnxbqcOOfYN_0.geometry} material={materials.bliqaGpTvCuZHuk} />
          <mesh geometry={nodes.MZgVlnVREwAXmWu_0.geometry} material={materials.TrnkWAfGduLgqLM} />
          <mesh geometry={nodes.LQmVKBDUfvlduwU.geometry} material={materials.qzKHApwituZTUxC} />
          <mesh geometry={nodes.jxlpVheMoDZjVdT.geometry} material={materials.XioMmaZGUXvxXPb} />
          <mesh geometry={nodes.QUgUcmNrbmAQdPa.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.DWuaFbuiStCtHXh.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.KEoybOafRtqNJNh.geometry} material={materials.IfqLTOjymCZMuVu} />
          <mesh geometry={nodes.XaStmvbQicYGoTn.geometry} material={materials.IfqLTOjymCZMuVu} />
          <mesh geometry={nodes.SkYYDNrQKqVDRge.geometry} material={materials.GCTfChbRIgBmWbe} />
          <mesh geometry={nodes.jllDjFkFZNzYOGW.geometry} material={materials.GoEESZWjCZpqeOD} />
          <mesh geometry={nodes.nHCDQLdTvgMPJbp.geometry} material={materials.pUfGAKnCgtMMbbm} />
          <mesh geometry={nodes.ZCtyoMmbuhknTJj.geometry} material={materials.erHrUfZxAtkfXqO} />
          <mesh geometry={nodes.EYwxmcMJdavFtfW.geometry} material={materials.MeiGPKHwBMVqGNQ} />
          <mesh geometry={nodes.YriphandxAMCCeO.geometry} material={materials.yuFXHUhPQDoVApU} />
          <mesh geometry={nodes.ixErOejazQORIfP.geometry} material={materials.yuFXHUhPQDoVApU} />
          <mesh geometry={nodes.gfCaTdiXaVSAvAF_0.geometry} material={materials.ZyKhfPnbNOCYIny} />
          <mesh geometry={nodes.NXKAkZjsnbPTLxk_0.geometry} material={materials.EcHAJKlkagvhESV} />
          <mesh geometry={nodes.QouRlcwrCgGeXyH_0.geometry} material={materials.hgmDQvqtKSacBdB} />
          <mesh geometry={nodes.CifRJRFlybUhpcD.geometry} material={materials.IfqLTOjymCZMuVu} />
          <mesh geometry={nodes.WaDbzrqgLcHkRTX.geometry} material={materials.EnwhLiFdMDwiUyz} />
          <mesh geometry={nodes.MZiAbIpINzxMuaJ_0.geometry} material={materials.TrnkWAfGduLgqLM} />
          <mesh geometry={nodes.jpYEgDQfzzGREjL.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.FCnUJNLAiKvmJAc_0.geometry} material={materials.IfqLTOjymCZMuVu} />
          <mesh geometry={nodes.TvbvbWsxdamuUZs.geometry} material={materials.XvdlxyjrKESiFay} />
          <mesh geometry={nodes.vpUhSFYUYpnDUQE.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.VglCddniAjuXwWP.geometry} material={materials.IIOPDiBWBbrUopx} />
          <mesh geometry={nodes.XdgYNqkrKoAIJsp.geometry} material={materials.qTzpZGPXrrlpDsm} />
          <mesh geometry={nodes.SLEuRDFLKhfUOyE.geometry} material={materials.nLgTjJkjjIwxPzH} />
          <mesh geometry={nodes.BILckvpwXOytcMs.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.MVWilhydUNwPxpT.geometry} material={materials.fhuhwvvbmZNTsNo} />
          <mesh geometry={nodes.tYhdRFkjheTEnwh.geometry} material={materials.euLqrXMAOeSzxXG} />
          <mesh geometry={nodes.lWFljklIAvFvrBM_0.geometry} material={materials.toZkefdtnUhLKyP} />
          <mesh geometry={nodes.mZCSizhtifxXBqG_0.geometry} material={materials.myxBndjHzHABgaf} />
          <mesh geometry={nodes.pkonsGObqbDcbjn_0.geometry} material={materials.qTzpZGPXrrlpDsm} />
          <mesh geometry={nodes.WUgXyTEbZmkapMh_0.geometry} material={materials.nfKhILGSzwibuSI} />
          <mesh geometry={nodes.quvFSzOoArSvcXY.geometry} material={materials.HTVLbrDhlLdibKi} />
          <mesh geometry={nodes.jiUeIJQcPqDOUIZ.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.rxiMoNrvziDIZct.geometry} material={materials.WeYJTXtSqeWejVb} />
          <mesh geometry={nodes.LcaTrKQHGWZApgK.geometry} material={materials.WSDoIreTMPBuTxz} />
          <mesh geometry={nodes.YyStFrQFolEKwWF.geometry} material={materials.yuFXHUhPQDoVApU} />
          <mesh geometry={nodes.dsCQvEsFBIAHfbb.geometry} material={materials.VlnkJNnmZmryUEK} />
          <mesh geometry={nodes.hImVmspNdsOatRs.geometry} material={materials.WSDoIreTMPBuTxz} />
          <mesh geometry={nodes.SpKnavUGNMxGglY.geometry} material={materials.WeYJTXtSqeWejVb} />
          <mesh geometry={nodes.OcdXOLSkbIPgJqo_0.geometry} material={materials.uApvtlLvHnjNKSG} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/phone/phone.gltf')
