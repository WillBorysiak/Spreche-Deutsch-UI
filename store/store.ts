import { create } from 'zustand';

interface Store {
	showSidebar: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	toggleSidebar: () => void;
}

export const useStore = create<Store>(set => ({
	showSidebar: true,
	openSidebar: () => set({ showSidebar: true }),
	closeSidebar: () => set({ showSidebar: false }),
	toggleSidebar: () => set(state => ({ showSidebar: !state.showSidebar })),
}));
