import React, { useState, useEffect, Suspense } from "react";

type Props = {
	inputWord: string;
};

const SynonymsComponent = ({ inputWord }: Props) => {
	const [synonyms, setSynonyms] = useState<object[]>();

	useEffect(() => {
		const apiCaller = async () => {
			const response = await fetch(
				`https://api.datamuse.com/words?rel_syn=${inputWord}`
			);
			const json = await response.json();
			setSynonyms(json);
		};

		apiCaller();
	}, [inputWord]);

	return (
		<div>
			<ul>
				{synonyms?.map((synonym, index) => (
					<li key={index}>{synonym.word}</li>
				))}
			</ul>
		</div>
	);
};

export default SynonymsComponent;
