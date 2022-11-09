import React, { Dispatch, SetStateAction, FormEvent } from "react";

type Props = {
	inputWord: string;
	setInputWord: Dispatch<SetStateAction<string>>;
};

const FormComponent = ({ inputWord, setInputWord }: Props) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='wordInput'>Your Word: </label>
				<input
					type='text'
					id='wordInput'
					value={inputWord}
					onChange={(e) => {
						setInputWord(e.target.value);
					}}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default FormComponent;
