import { Sphere } from "@/ui/sphere"
import { useWindowResize } from "@/hooks/useWindowResize"

export const SphereLayout: React.FC = () => {
  const view = useWindowResize();
  return (
    <>
      {view === 1 && 
        <>
          <Sphere variant="v1" size={45} top={27} left={454}/>
          <Sphere variant="v1" size={39} top={235} left={679}/>
          <Sphere variant="v1" size={69} top={76} left={1156}/>
          <Sphere variant="v1" size={52} top={153} right={140}/>

          <Sphere variant="v1" size={72} top={426} left={140}/>
          <Sphere variant="v1" size={77} bottom={23} left={224}/>
          <Sphere variant="v1" size={64} bottom={21} left={859}/>
          <Sphere variant="v1" size={36} bottom={147} right={743}/>
          <Sphere variant="v1" size={94} bottom={22} right={312}/>
          <Sphere variant="v1" size={46} bottom={276} right={50}/>
        </>
      }
    </>
  )
}
