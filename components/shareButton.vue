<template>
<div>
    <v-btn icon :href="suppotShare ? undefined : href" @click="share"
    >
    <v-icon v-if="suppotShare">mdi-share-variant-outline</v-icon>
    <v-icon v-else>mdi-whatsapp</v-icon>
  </v-btn>
</div>
  
</template>

<script>
export default {
    methods:{
        share(){
            if(this.suppotShare) navigator.share(this.shareInfo)
        }
    },
    computed:{
        shareInfo() {
                return {url: this.url,
                title: "Given that I want to share with you",
                text: "NBA Information  "}
            },
        suppotShare(){
            return Boolean(navigator.share)
        },
        url(){
            return window.location.href;
        },
        href(){
            return `https://wa.me/?text=${this.shareInfo.title + " " + this.url}`;
        }
    }
}
</script>