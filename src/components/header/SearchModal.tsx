import HomeGallery from '../content/home-page/HomeGallery';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const SearchModal = (props: { isOpen: boolean; onClose: () => void }) => {
	const isOpen = props.isOpen;
	const onClose = props.onClose;

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-zinc-800 bg-opacity-25" />
				</Transition.Child>

				<div id="dialog-container" className="fixed inset-0">
					<div className="flex min-h-full items-center justify-center p-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="no-scrollbar max-h-[400px] w-full max-w-md transform overflow-y-auto rounded-sm bg-zinc-100 p-6 text-center align-middle shadow-xl transition-all">
								<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
									Search Box
								</Dialog.Title>
								<HomeGallery />
								<HomeGallery />
								<HomeGallery />
								<HomeGallery />
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default SearchModal;
