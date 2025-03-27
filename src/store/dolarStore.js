import axios from "axios";
import { create } from "zustand";

const useDolarStore = create((set) => ({
  dolarData: null,
  isLoading: false,
  error: null,

  fetchDolarData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get("https://dolarapi.com/v1/dolares");
      set({ dolarData: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useDolarStore;
