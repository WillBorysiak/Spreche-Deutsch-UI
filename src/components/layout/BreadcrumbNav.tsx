import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BreadcrumbNav = () => {
	const router = useRouter();

	const path = router.asPath.replace(/^\/+/g, '');
	const segments = path.split('/');
	const breadcrumbs = segments.map((segment, idx) => {
		const href = `/${segments.slice(0, idx + 1).join('/')}`;
		return {
			name: segment,
			href: href,
			current: idx === segments.length - 1,
		};
	});

	return (
		<nav className="mt-1 flex justify-center">
			<ol role="list" className="flex items-center space-x-4">
				<Link href="/" className="text-zinc-200 hover:text-zinc-300">
					<HomeIcon className="h-5 w-5 flex-shrink-0" />
				</Link>

				{breadcrumbs.map((breadcrumb, index) => (
					<li key={index}>
						<div className="flex items-center">
							<ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-zinc-200" />
							<Link
								href={breadcrumb.href}
								className={`text-md ml-3 font-medium capitalize  ${
									breadcrumb.current
										? 'text-zinc-200 underline underline-offset-4'
										: 'capitalize text-zinc-300 hover:text-zinc-200'
								}`}
							>
								{breadcrumb.name}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default BreadcrumbNav;
