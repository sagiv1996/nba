<template>
      <v-btn icon @click="share">
      <v-icon v-if="suppotShare">mdi-share-variant-outline</v-icon>
      <v-icon v-else>mdi-whatsapp</v-icon>
  </v-btn>
</template>

<script>
export default {
    methods:{
        share(){
            const shareInfo = {
                url: window.location.href,
                title: "Given that I want to share with you",
            }
            this.suppotShare? navigator.share(shareInfo): this.$route.go({path: `https://wa.me/?text=${shareInfo.title + " " + shareInfo.url}`})
        }
    },
    computed:{
        suppotShare(){
            return navigator.share
        }
    }
}
</script>