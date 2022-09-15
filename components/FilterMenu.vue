<template>
  <div>
    {{ filtersList }}
  </div>
</template>

<script>
import { useFiltersStore } from '~/store/filters';

export default defineComponent({
  setup() {
    const filtersStore = useFiltersStore();
    const filtersList = filtersStore.filtersList;

    return { filtersList };
  },
});
</script>
