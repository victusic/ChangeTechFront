import Cv from "../src/assets/icons/links/cv/Cv"
import Git from "../src/assets/icons/links/git/Git"
import Linked from "../src/assets/icons/links/linked/Linked"
import Telegram from "../src/assets/icons/links/telegram/Telegram"
import { ElementsPlate } from "../src/components/elementsPlate/ElementsPlate"
import { MainWaves } from "../src/components/startPage/mainWaves/MainWaves"
import UnderLogoText from "../src/components/startPage/underLogoText/UnderLogoText"
import Header from "../src/modules/header/Header"
import { StartBack } from "../src/ui/backs/startBack/StartBack"
import { StartPlateText } from "../src/components/startPage/startPlateText/StartPlateText"
import Logo from "../src/ui/logo/Logo"
import { Button } from "../src/ui/buttons";

const index = () => {
  return (
    <StartBack>
      <MainWaves/>
      <ElementsPlate>
        <Logo/>
        <UnderLogoText/>

        <Header/>
        <StartPlateText/>
        <Button variant='startPlate'>Начать выбор</Button>

        <Telegram/>
        <Git/>
        <Cv/>
        <Linked/>
        
      </ElementsPlate>
    </StartBack>
  )
}

export default index
