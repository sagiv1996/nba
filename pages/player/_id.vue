<template>
  <v-card>
    <v-img
      :src="img"
      contain
      height="50vh"
      :alt="player.first_name + ' ' + player.last_name"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
      <v-card-title v-text="player.first_name + ' ' + player.last_name" />
    </v-img>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="(onePlayer, key) in player"
          :key="onePlayer.id"
          v-show="onePlayer && key != 'team' && key != 'id'"
        >
          <v-list-title
            >{{ key.replace("_", " ") }}: {{ onePlayer }}</v-list-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-title>team: {{ player.team.full_name }}</v-list-title>
          <v-list-tile-action>
            <v-btn icon :to="'/team/' + player.team.id" nuxt>
              <v-icon>mdi-export</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-item>

          <v-list-item v-if="img">
          <v-list-title>share</v-list-title>
          <v-list-tile-action>
            <v-btn icon :href="share()" target="_top">
              <v-icon>mdi-share</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const player = await $axios.$get(`players/${params.id}`);
    return { player };
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
  methods: {
    share() {
        const url = window.location.href;
      const text = "Given that I want to share with you";
      return `https://wa.me/?text=${text + " " + url}`;
      
    },
  },
};
</script>
