import { create } from "zustand";

interface StoreState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
