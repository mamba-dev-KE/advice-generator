import { useWindowSize } from 'usehooks-ts';
import mobileDivider from '../assets/images/pattern-divider-mobile.svg';
import desktopDivider from '../assets/images/pattern-divider-desktop.svg';
import iconDice from '../assets/images/icon-dice.svg';

interface AdviceProps {
  id: string;
  advice: string;
}

const AdviceItem: React.FC<AdviceProps> = ({
  id,
  advice,
}) => {
  const size = useWindowSize();
  const isMobile = size.width < 500;

  return (
    <div className="bg-darkGrayishBlue rounded-lg pt-6 px-8 max-w-[34rem] mx-auto">
      <p className="text-green text-center font-bold uppercase py-5 tracking-widest text-sm">
        Advice #{id}
      </p>
      <h1 className="text-cyan text-[1.75rem] text-center">
        "{advice}"
      </h1>
      <div className="mt-6">
        <img
          src={
            isMobile
              ? mobileDivider
              : desktopDivider
          }
          alt=""
          className="max-w-full mx-auto block"
        />
      </div>
      <div className="w-16 aspect-square rounded-full bg-green grid items-center justify-center relative left-1/2 top-8 transform translate-x-[-50%] cursor-pointer">
        <img src={iconDice} alt="" className="" />
      </div>
    </div>
  );
};

export default AdviceItem;
