import { useEffect, useState } from 'react';
import AdviceItem from './components/AdviceItem';
import { Advice } from './types/advice';

const App = () => {
  const [advice, setAdvice] = useState<Advice[]>([]);

  const fetchAndSetAdvice = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice([data]);
      });
  };

  useEffect(() => {
    fetchAndSetAdvice('https://api.adviceslip.com/advice');
  }, [advice]);

  return (
    <main className="grid items-center font-Manrope font-extrabold h-screen mx-auto bg-darkBlue px-4">
      <div className="container max-w-[34rem] mx-auto">
        {advice.map(({ slip }) => (
          <AdviceItem key={slip.id} {...slip} />
        ))}
      </div>
    </main>
  );
};

export default App;
