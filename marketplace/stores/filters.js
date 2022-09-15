import { defineStore } from 'pinia';

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: ['dark', 'light'],
    };
  },
  actions: {},
  getters: {
    filtersList: (state) => state.filtersList,
  },
});
