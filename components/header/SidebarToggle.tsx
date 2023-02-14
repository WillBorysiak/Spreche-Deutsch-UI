import { faBars, faX } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SidebarProps {
	mobileSidebar: boolean;
	toggleMobileSidebar: () => void;
}

const SidebarToggle = (props: { sidebarProps: SidebarProps }) => {
	const { mobileSidebar, toggleMobileSidebar } = props.sidebarProps;

	return (
		<button className="lg:hidden" onClick={toggleMobileSidebar}>
			{!mobileSidebar && <FontAwesomeIcon icon={faBars} size="2x" />}
			{mobileSidebar && <FontAwesomeIcon icon={faX} size="2x" />}
		</button>
	);
};

export default SidebarToggle;
