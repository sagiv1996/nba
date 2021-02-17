<template lang="pug">
  v-card 
    v-img(:src="img" height="50vh" contain gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)" class="white--text align-end"  )
    v-card-text 
      v-list
        v-v-list-item(v-for="(item, key) in team" :key="item.id" v-show="key != 'id'")
        v-list-item-title {{ key.replace("_", " ") }}: {{ item }}
        v-v-list-item( v-if="img" )
          v-list-title share
          v-list-item-action
            share-button
</template>
<script>
export default {
  async asyncData({ $axios, params, redirect }) {
    try {
      const team = await $axios.$get(`teams/${params.id}`);
    return { team };
    } catch (error) {
      if (err.response.status === 404) {
        return redirect("/team");
      }
    }
    
  },
  data: () => ({
    img: null,
  }),
  async mounted() {
    const img = await this.$axios.$get(
      `https://api.unsplash.com/photos/random/?client_id=s0-HwCp9WRrwWwxz1T9agtF9NXinfrRcfCN2BDdC7S8&per_page=1&&query=basketball`
    );
    this.img = img.urls.small;
  },
};
</script>