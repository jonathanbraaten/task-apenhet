import { create } from 'zustand';
import { fetchCountry } from '../actions/actions';

export const fetchStoreData = create((set) => ({
  store: [],
  fetchData: async (id: string) => {
    try {
      const data = await fetchCountry(id);
      if (!Array.isArray(data) || data.length < 1) {
        console.error('Error: No data returned');
      }

      set({ store: [...data] });
    } catch (error) {
      console.error('Error: No data returned');
    }
  },
}));
