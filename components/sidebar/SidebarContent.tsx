import Heading from '../typography/Heading';

const SidebarContent = () => {
	return (
		<div id="sidebar">
			<div id="sidebar-container" className="flex flex-col p-10">
				<Heading content="Spreche Deutsch" />

				<div id="navigation-container" className="mt-10">
					<div className="mb-5">
						<h4>Introduction</h4>
						<p className="mt-1 pl-5">About</p>
					</div>

					<div className="mb-5">
						<h4>Words</h4>
						<p className="mt-1 pl-5">Numbers</p>
						<p className="mt-1 pl-5">Colours</p>
						<p className="mt-1 pl-5">Family</p>
						<p className="mt-1 pl-5">Food</p>
						<p className="mt-1 pl-5">Places</p>
					</div>

					<div className="mb-5">
						<h4>Sentences</h4>
						<p className="mt-1 pl-5">Greetings</p>
						<p className="mt-1 pl-5">Small Talk</p>
						<p className="mt-1 pl-5">Transactions</p>
						<p className="mt-1 pl-5">Activites</p>
						<p className="mt-1 pl-5">Locations</p>
						<p className="mt-1 pl-5">Weather</p>
						<p className="mt-1 pl-5">Dining</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarContent;
