import React from 'react'
import { StartScreen } from "../src/modules/startPage/startScreen"
import { MainWaves } from "../src/components/startPage/mainWaves/MainWaves"
import { StartBack } from "../src/ui/backs/startBack/StartBack"

const index = () => {
  return (
    <StartBack>
      <MainWaves/>
      <StartScreen/>
    </StartBack>
  )
}

export default index

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'], null, ['en', 'kz', 'ru'])),
      // Will be passed to the page component as props
    },
  }
}