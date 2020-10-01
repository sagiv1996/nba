<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app bottom>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          nuxt
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toggleTheme">
          <v-list-item-action>
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> dark mode </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-avatar
      >
        <img :src="$icon(512)" alt="icon">
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt v-if="$nuxt.isOnline"/>
        <v-alert type="error" :value="true" icon="mdi-wifi-off" v-else>
          There is no network connection
        </v-alert>
      </v-container>
    </v-main>
    <v-footer app absolute inset>
      <span>
        The data on the site is educated from
        <v-btn
          text
          href="https://rapidapi.com/theapiguy/api/free-nba"
          target="_blank"
          link
          small
          >here</v-btn
        >
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted() {
    const theme = localStorage.getItem("useDarkTheme");
    this.$vuetify.theme.dark = theme === true;
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
