import { useQuery } from '@tanstack/react-query';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import AdviceItem from './components/AdviceItem';
import { Advice } from './types/advice';
import { fetchAdvice } from './utils/utils';

const App = () => {
  const { isLoading, isError, data, error } =
    useQuery<Advice, Error>(
      ['advice'],
      fetchAdvice
    );

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid items-center font-Manrope font-extrabold h-screen mx-auto bg-darkBlue px-4"
    >
      <AnimatePresence exitBeforeEnter>
        {isLoading && (
          <motion.p
            key="loading"
            initial={{ x: 200, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            className="text-2xl text-green text-center"
          >
            Loading...
          </motion.p>
        )}

        {isError && (
          <motion.p
            key="error"
            initial={{ x: 200, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            className="text-2xl text-red-300 text-center"
          >
            {error.message}
          </motion.p>
        )}
        {data && <AdviceItem {...data.slip} />}
      </AnimatePresence>
    </motion.main>
  );
};

export default App;
