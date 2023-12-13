import Cv from "../src/assets/icons/links/cv/Cv"
import Git from "../src/assets/icons/links/git/Git"
import Linked from "../src/assets/icons/links/linked/Linked"
import Telegram from "../src/assets/icons/links/telegram/Telegram"
import { ElementsPlate } from "../src/components/elementsPlate/ElementsPlate"
import { MainWaves } from "../src/components/startPage/mainWaves/MainWaves"
import UnderLogoText from "../src/components/startPage/underLogoText/UnderLogoText"
import { StartBack } from "../src/ui/backs/startBack/StartBack"
import Logo from "../src/ui/logo/Logo"

const index = () => {
  return (
    <StartBack>
      <MainWaves/>
      <ElementsPlate>
        <Logo/>
        <UnderLogoText/>
        <Telegram/>
        <Git/>
        <Cv/>
        <Linked/>
        
      </ElementsPlate>
    </StartBack>
  )
}

export default index
