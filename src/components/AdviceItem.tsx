import React from "react";

interface AdviceProps {
	id: string;
	advice: string;
}

const AdviceItem: React.FC<AdviceProps> = ({ id, advice }) => {
	return (
		<div key={id} className="bg-darkBlue">
			<h1 className=" text-cyan ">{advice}</h1>
		</div>
	);
};

export default AdviceItem;
