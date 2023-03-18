import React from 'react';

const PrimaryButton = (props: { text: string }) => {
	const text = props.text;

	return (
		<button
			type="button"
			className="rounded-sm bg-yellow-600 py-2 px-3 text-lg font-semibold shadow-sm hover:bg-yellow-500"
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
