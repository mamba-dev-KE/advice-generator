import { useQuery } from '@tanstack/react-query';
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
    <main className="grid items-center font-Manrope font-extrabold h-screen mx-auto bg-darkBlue px-4">
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {data && <AdviceItem {...data.slip} />}
    </main>
  );
};

export default App;
