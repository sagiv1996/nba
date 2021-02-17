<template lang="pug">
  v-data-table( :headers="headers" :items="teams.data" :server-items-length="teams.meta.itemsLength" :search="search" fixed-header multi-sort :footer-props="{itemsPerPageOptions: [10, 15, -1],}" :height="!Boolean(search)? '530': 'auto'")
    template(v-slot="top")
      v-text-field( label="search" v-model.lazy="search" clearable prepend-icon="mdi-search-web")
    template( v-slot:[`item.id`] ="{item}")
      v-btn(icon :to="'team/'+item.id" nuxt)
        v-icon mdi-export
</template>
<script>
export default { 
  async asyncData({ $axios }) {
    const teams = await $axios.$get("teams");
    return { teams };
  },
  data: () => ({
    search: null,
    headers: [
      {
        text: "abbreviation",
        value: "abbreviation",
      },

      {
        text: "city",
        value: "city",
      },
      {
        text: "conference",
        value: "conference",
      },
      {
        text: "division",
        value: "division",
      },
      {
        text: "full name",
        value: "full_name",
      },
      {
        text: "name",
        value: "name",
      },
      {
        text: "open",
        value: "id",
        sortable: false,
        filterable: false,
      },
    ],
  }),
};
</script>
