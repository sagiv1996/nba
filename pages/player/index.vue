<template lang="pug">
  v-data-table( :headers="headers" :items.sync="players.data" @pagination="pagination" :server-items-length="players.meta.itemsLength" :loading="load" multi-sort :footer-props="{itemsPerPageOptions: [10,50,100, 250, 500]}" :search="search")
    template(v-slot:top)
      v-text-field( label="search" v-model="search" hint="Note! The search will be performed only on data already loaded. To search all the data, press Enter"  @keyup.enter="searchStr" @change.stop="searchStr" clearable prepend-icon="mdi-search-web")
    template( v-slot:[`item.id`] ="{item}")
      v-btn(icon :to="'player/'+item.id" nuxt)
        v-icon mdi-export
</template>

<script>
export default {
  async asyncData({$axios})
  {
    const data = await $axios.$get('players?page=0&per_page=100');
    return {players: data}
  },
  data: () => ({
    search: null,
    headers: [
      { text: "Firt Name", value: "first_name" },
      { text: "Last Name", value: "last_name" },
      { text: "height feet", value: "height_feet" },
      { text: "height_inche", value: "height_inche" },
      { text: "position", value: "position" },
      { text: "weight pounds", value: "weight_pounds" },
      {text:"open", value: "id", filterable: false,sortable: false}
    ],
    load:false,
    loadFromSearch:[]
  }),
  methods:{
    async pagination(pagination)
    {
      if(pagination.page === pagination.pageCount && pagination.itemsLength < this.players.meta.total_count && !this.search) // load more data
      {
        
        this.load = true
        const data = await this.$axios.$get(`players?page=${parseInt(pagination.itemsLength / 100) + 1}&per_page=100`);
        this.players.meta = data.meta;
        for (const iterator of data.data) {

          const find = this.loadFromSearch.find(x=> x === iterator.id)
          if(find=== undefined) this.players.data.push(iterator)
          
        }
        this.load = false
      }
    },
    async searchStr(){
      this.load = true
      const data = await this.$axios.$get(`players?page=0&per_page=100&search=${this.search}`);
      if(data.data)
      {
        for (const iterator of data.data) {
          const find  = this.players.data.find(player=>player.id === iterator.id)
          if(find === undefined) {
            this.players.data.push(iterator)
            this.loadFromSearch.push(iterator.id)
          }
        }
      }
      
        this.load = false
    }
  }
};
</script>
