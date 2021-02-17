<template lang="pug">
  v-card
    v-img( :src="img" contain  height="500vh" :alt="player.first_name + ' ' + player.last_name" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"  ) 
      v-card-title(v-text="player.first_name + ' ' + player.last_name")
    v-card-text 
      v-list
        v-list-item( v-for="(item, key) in player" :key="key" v-show="item && key != 'team' && key != 'id'")
          v-list-item-title {{ key.replace("_", " ") }}: {{ item }}
        v-list-item
          v-list-item-title team: {{ player.team.full_name }}
          v-list-item-action
            v-btn( icon :to="'/team/' + player.team.id" nuxt )
              v-icon mdi-export
        v-list-item( v-if="img" )
          v-list-item-title share
          v-list-item-action
            share-button
</template>
<script>
export default {
  async asyncData({ $axios, params, redirect }) {
    try {
      const player = await $axios.get(`players/${params.id}`);
      return { player: player.data };
    } catch (err) {
      if (err.response.status === 404) {
        return redirect("/player");
      }
    }

    console.log(player.status);
  },
  data: () => ({
    img: null,
  }),
  async mounted() {
    const img = await this.$axios.$get(
      `https://api.unsplash.com/photos/random/?client_id=s0-HwCp9WRrwWwxz1T9agtF9NXinfrRcfCN2BDdC7S8&per_page=1&query=nba`
    );
    this.img = img.urls.small;
  },
};
</script>
