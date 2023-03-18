import React from 'react';

const SecondaryButton = (props: { text: string }) => {
	const text = props.text;

	return (
		<button
			type="button"
			className="rounded-sm bg-green-400 py-2 px-3 text-lg font-semibold shadow-sm hover:bg-green-500"
		>
			{text}
		</button>
	);
};

export default SecondaryButton;
