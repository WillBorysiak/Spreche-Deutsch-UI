import { Word } from '../../../interfaces/Word';

const TranslationTable = (props: { data: Word[] | undefined }) => {
	let data = props.data;

	if (!props.data) data = [];

	return (
		<div className="mt-10">
			{data &&
				data.map((word, index) => {
					return (
						<div key={index} id="translation-card" className="flex">
							<p className="mr-5">{word.german}</p>
							<p key={index}>{word.english}</p>
						</div>
					);
				})}
		</div>
	);
};

export default TranslationTable;
