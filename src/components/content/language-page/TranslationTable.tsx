import { Word } from '../../../interfaces/Word';

const TranslationTable = (props: { data: Word[] | undefined; loading: boolean; error: string }) => {
	let data = props.data;
	const { loading, error } = props;

	if (!props.data) data = [];

	if (error) console.log(error);

	return (
		<div className="mt-10 grid grid-cols-2">
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
