import { FormEvent, useState } from "react";
import "./App.css";

//Component Imports
import FormComponent from "./components/Form.component";
import SynonymsComponent from "./components/Synonyms.component";

function App() {
	const [inputWord, setInputWord] = useState("");

	return (
		<div className='App'>
			<FormComponent inputWord={inputWord} setInputWord={setInputWord} />
			<SynonymsComponent inputWord={inputWord} />
		</div>
	);
}

export default App;

