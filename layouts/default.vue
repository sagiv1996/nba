<template lang="pug">
  v-app 
    v-navigation-drawer( v-model="drawer" app bottom )
      v-list
        v-list-item(v-for="(item, i) in items" :key="i" :to="item.to" router exact nuxt)
          v-list-item-action
            v-icon( v-text="item.icon")
          v-list-item-content
            v-list-item-title(v-text="item.title")
        v-list-item(@click="toggleTheme")
          v-list-item-action
            v-icon mdi-theme-light-dark
          v-list-item-content
            v-list-item-title dark mode
    v-app-bar( app )
      v-app-bar-nav-icon( @click.stop="drawer = !drawer")
      v-spacer        
      v-btn( fab to='/' nuxt )
        v-avatar( to="/")
          v-img( :src="$icon(512)" alt="icon")      
    v-main
      v-container
        nuxt(v-if="$nuxt.isOnline")
        v-alert( type="error" :value="true" icon="mdi-wifi-off" v-else )
    v-footer( app absolute inset) The data on the site is educated from
      v-btn( text href="https://rapidapi.com/theapiguy/api/free-nba" target="_blank" link small) here
</template>

<script>
export default {
  mounted() {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: "mdi-home",
          title: "home",
          to: "/",
        },
        {
          icon: "mdi-basketball",
          title: "players",
          to: "/player",
        },
        {
          icon: "mdi-basketball-hoop-outline",
          title: "teams",
          to: "/team",
        },
        {
          icon:"mdi-contactless-payment",
          title: "contact  us",
          to: "contact-us"
        }
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
