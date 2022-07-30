import React from 'react';
import mobileDivider from '../assets/images/pattern-divider-mobile.svg';

interface AdviceProps {
  id: string;
  advice: string;
}

const AdviceItem: React.FC<AdviceProps> = ({ id, advice }) => {
  return (
    <div key={id} className="bg-grayishBlue rounded-lg py-6">
      <p className="text-green text-center font-bold uppercase py-10 tracking-widest text-sm">
        Advice #{id}
      </p>
      <h1 className="text-cyan text-[1.75rem] text-center">"{advice}"</h1>
      <div className="border">
        <img src={mobileDivider} alt="" className="max-w-full mx-auto block" />
      </div>
    </div>
  );
};

export default AdviceItem;
