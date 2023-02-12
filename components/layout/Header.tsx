import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-thin-svg-icons';

const Header = (props: { toggleSidebar: () => void }) => {
	return (
		<section
			id="header"
			className="flex h-36 w-full items-center justify-center border-2 border-green-500 bg-blue-900 lg:bg-inherit"
		>
			<div id="header-container" className="flex flex-col">
				<h1>Header</h1>
				<button className="mt-3 lg:hidden" onClick={props.toggleSidebar}>
					<FontAwesomeIcon icon={faBars} size="2x" />
				</button>
			</div>
		</section>
	);
};

export default Header;
