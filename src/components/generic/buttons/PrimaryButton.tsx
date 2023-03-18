import React from 'react';

const PrimaryButton = (props: { text: string }) => {
	const text = props.text;

	return (
		<button
			type="button"
			className="rounded-sm bg-white/10 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
