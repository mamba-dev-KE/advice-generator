import { useEffect, useState } from "react";
import AdviceItem from "./components/AdviceItem";
import { Advice } from "./types/advice";

const App = () => {
	const [advice, setAdvice] = useState<Advice[]>([]);

	useEffect(() => {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((data) => {
				setAdvice([data]);
			});
	}, []);

	return (
		<main>
			{advice.map(({ slip }) => (
				<AdviceItem {...slip} />
			))}
		</main>
	);
};

export default App;
