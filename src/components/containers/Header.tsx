import Image from 'next/image';

import MobileHeader from '../header/MobileHeader';
import ThemeToggle from '../header/ThemeToggle';

const Header = () => {
	return (
		<section id="header" className="light-background dark:dark-background flex h-[5%] w-full items-center px-3">
			<div className="flex w-full flex-row items-center justify-between">
				<Image className="hidden lg:block" src="/images/german-flag.svg" alt="The German flag" height={65} width={65} />
				<MobileHeader />
				<ThemeToggle />
			</div>
		</section>
	);
};

export default Header;
