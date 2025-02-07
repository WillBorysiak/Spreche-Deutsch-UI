import { create } from 'zustand';

interface SidebarStore {
	mobileSidebar: boolean;
	closeMobileSidebar: () => void;
	toggleMobileSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>(set => ({
	mobileSidebar: false,
	closeMobileSidebar: () => set({ mobileSidebar: false }),
	toggleMobileSidebar: () => set(state => ({ mobileSidebar: !state.mobileSidebar })),
}));
