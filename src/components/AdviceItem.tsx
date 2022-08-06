import { useWindowSize } from 'usehooks-ts';
import { motion } from 'framer-motion';
import mobileDivider from '../assets/images/pattern-divider-mobile.svg';
import desktopDivider from '../assets/images/pattern-divider-desktop.svg';
import iconDice from '../assets/images/icon-dice.svg';
interface AdviceProps {
  id: string;
  advice: string;
  refetch?: () => void;
}

const AdviceItem: React.FC<AdviceProps> = ({
  id,
  advice,
  refetch,
}) => {
  const size = useWindowSize();
  const isMobile = size.width < 500;

  return (
    <motion.div
      initial={{ scale: 0, y: 20, opacity: 0 }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.05,
          ease: 'easeInOut',
        },
      }}
      className="bg-darkGrayishBlue rounded-xl pt-6 px-8 max-w-[34rem] mx-auto"
    >
      <p className="text-green text-center font-bold uppercase py-5 tracking-widest text-sm">
        Advice #{id}
      </p>
      <h1 className="text-cyan md:text-[1.75rem] text-center">
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
      <motion.div
        className="w-12 aspect-square rounded-full bg-green grid items-center justify-center relative left-1/2 top-8 transform translate-x-[-50%] cursor-pointer active:scale-[0.95] hover:drop-shadow-dice scale-125  transition"
        onClick={refetch}
      >
        <img
          src={iconDice}
          alt=""
          className="w-5"
        />
      </motion.div>
    </motion.div>
  );
};

export default AdviceItem;
