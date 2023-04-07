import Image from 'next/image';

import { Sentence } from '../../../interfaces/Sentence';
import { Word } from '../../../interfaces/Word';
import TableHeading from '../../generic/typography/translation-table/TableHeading';
import TableText from '../../generic/typography/translation-table/TableText';

const TranslationTable = (props: { data: Word[] | Sentence[] | undefined; type: string | undefined }) => {
	let data = props.data;
	let type = props.type;

	if (!props.data) data = [];

	return (
		<article id="translation-table" className="mx-3 mt-10 sm:mx-0">
			<div id="table-container" className="flex-col items-center justify-center">
				{/* words */}
				{type === 'words' && (
					<table id="words-table" className="mx-auto w-full divide-y divide-zinc-200">
						<thead>
							<tr>
								<th className="border-r border-zinc-200 py-3">
									<Image className="mx-auto" src="/images/svg/uk-icon.svg" alt="The UK flag" height={25} width={25} />
									<div className="mt-3" />
									<TableHeading text="English" />
								</th>
								<th className="border-r border-zinc-200 py-3">
									<Image
										className="mx-auto"
										src="/images/svg/germany-icon.svg"
										alt="The German flag"
										height={25}
										width={25}
									/>
									<div className="mt-3" />
									<TableHeading text="German" />
								</th>
								<th className="py-5 sm:w-[125px]">
									<TableHeading text="Gender" />
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-zinc-200">
							{data &&
								data.map((item, index) => (
									<tr key={index}>
										<td className="border-r border-zinc-200 px-3 py-5">
											<TableText text={item.english} />
										</td>
										<td className="border-r border-zinc-200 px-3 py-5">
											<TableText text={item.german} />
										</td>
										<td className="py-5">
											<TableText text={item.gender} />
										</td>
									</tr>
								))}
						</tbody>
					</table>
				)}

				{/* sentences */}
				{type === 'sentences' && (
					<table id="sentences-table" className="mx-auto w-full divide-y divide-zinc-200">
						<thead>
							<tr>
								<th className="border-r border-zinc-200 py-5">
									<Image className="mx-auto" src="/images/svg/uk-icon.svg" alt="The UK flag" height={25} width={25} />
									<div className="mt-3" />
									<TableHeading text="English" />
								</th>
								<th className="py-5">
									<Image
										className="mx-auto"
										src="/images/svg/germany-icon.svg"
										alt="The German flag"
										height={25}
										width={25}
									/>
									<div className="mt-3" />
									<TableHeading text="German" />
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-zinc-200">
							{data &&
								data.map((item, index) => (
									<tr key={index}>
										<td className="border-r border-zinc-200 px-3 py-5">
											<TableText text={item.english} />
										</td>
										<td className="px-3 py-5">
											<TableText text={item.german} />
										</td>
									</tr>
								))}
						</tbody>
					</table>
				)}
			</div>
		</article>
	);
};

export default TranslationTable;
