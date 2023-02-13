import { create } from 'zustand';

interface SidebarStore {
	desktopSidebar: boolean;

	mobileSidebar: boolean;
	closeMobileSidebar: () => void;
	toggleMobileSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>(set => ({
	desktopSidebar: true,

	mobileSidebar: false,
	closeMobileSidebar: () => set({ mobileSidebar: false }),
	toggleMobileSidebar: () => set(state => ({ mobileSidebar: !state.mobileSidebar })),
}));
