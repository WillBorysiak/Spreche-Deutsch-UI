import { Word } from '../../../interfaces/Word';

const TranslationTable = (props: { data: Word[]; error: string }) => {
	const data = props.data;
	const error = props.error;

	if (error) console.log(error);

	return (
		<div className="mt-10">
			{data.map((word, index) => {
				return (
					<div key={index} className="flex">
						<p className="mr-5">{word.german}</p>
						<p key={index}>{word.english}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TranslationTable;
