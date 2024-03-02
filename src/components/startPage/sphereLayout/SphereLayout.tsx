import { Sphere } from '@/ui/sphere';
import { useWindowResize } from '@/hooks/useWindowResize';

export const SphereLayout: React.FC = () => {
  const view = useWindowResize();
  return (
    <>
      {view === 1 && (
        <>
          <Sphere variant="v1" size={45} top={27} left={454} />
          <Sphere variant="v1" size={39} top={235} left={679} />
          <Sphere variant="v1" size={69} top={76} left={1156} />

          <Sphere variant="v1" size={52} top={153} right={140} />

          <Sphere variant="v1" size={72} top={426} left={140} />
          <Sphere variant="v1" size={77} bottom={23} left={224} />
          <Sphere variant="v1" size={64} bottom={21} left={859} />

          <Sphere variant="v1" size={36} bottom={147} right={703} />
          <Sphere variant="v1" size={94} bottom={22} right={312} />
          <Sphere variant="v1" size={46} bottom={276} right={50} />
        </>
      )}
      {view === 2 && (
        <>
          <Sphere variant="v1" size={33} top={20} left={303} />
          <Sphere variant="v1" size={29} top={177} left={472} />

          <Sphere variant="v1" size={52} top={20} right={436} />
          <Sphere variant="v1" size={39} top={133} right={126} />

          <Sphere variant="v1" size={54} top={321} left={67} />
          <Sphere variant="v1" size={58} bottom={16} left={142} />
          <Sphere variant="v1" size={27} bottom={94} left={789} />

          <Sphere variant="v1" size={48} bottom={26} right={693} />
          <Sphere variant="v1" size={70} bottom={19} right={198} />
          <Sphere variant="v1" size={34} bottom={189} right={9} />
        </>
      )}
      {view === 3 && (
        <>
          <Sphere variant="v1" size={25} top={12} left={277} />
          <Sphere variant="v1" size={22} top={197} left={332} />
          <Sphere variant="v1" size={39} top={54} left={568} />
          <Sphere variant="v1" size={48} top={189} left={538} />

          <Sphere variant="v1" size={29} top={122} right={26} />
          <Sphere variant="v1" size={76} top={288} right={67} />

          <Sphere variant="v1" size={43} bottom={88} left={136} />
          <Sphere variant="v1" size={36} bottom={22} left={342} />

          <Sphere variant="v1" size={20} bottom={122} right={423} />
          <Sphere variant="v1" size={53} bottom={64} right={142} />
          <Sphere variant="v1" size={26} bottom={218} right={34} />
        </>
      )}
      {view === 4 && (
        <>
          <Sphere variant="v1" size={22} top={134} left={337} />
          <Sphere variant="v1" size={36} top={294} left={36} />
          <Sphere variant="v1" size={41} top={504} left={9} />
          <Sphere variant="v1" size={33} top={26} left={255} />

          <Sphere variant="v1" size={44} top={77} right={105} />
          <Sphere variant="v1" size={44} top={466} right={24} />

          <Sphere variant="v1" size={41} bottom={52} left={136} />
          <Sphere variant="v1" size={34} bottom={29} left={312} />

          <Sphere variant="v1" size={34} bottom={84} right={21} />
        </>
      )}
      {view === 5 && (
        <>
          <Sphere variant="v1" size={22} top={34} left={187} />

          <Sphere variant="v1" size={44} top={106} right={45} />
          <Sphere variant="v1" size={36} top={186} right={108} />

          <Sphere variant="v1" size={41} bottom={72} left={86} />
          <Sphere variant="v1" size={34} bottom={192} left={34} />

          <Sphere variant="v1" size={34} bottom={174} right={16} />
        </>
      )}
      {view === 6 && (
        <>
          <Sphere variant="v1" size={24} top={19} left={137} />
          <Sphere variant="v1" size={37} top={166} left={48} />

          <Sphere variant="v1" size={16} top={109} right={64} />
          <Sphere variant="v1" size={36} top={166} right={38} />

          <Sphere variant="v1" size={27} bottom={19} left={86} />
          <Sphere variant="v1" size={18} bottom={122} left={24} />

          <Sphere variant="v1" size={34} bottom={134} right={16} />
        </>
      )}
    </>
  );
};
