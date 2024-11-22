import { create } from 'zustand';

type SearchState = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const useSearch = create<SearchState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
