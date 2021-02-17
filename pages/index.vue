<template lang="pug">
  v-card
    v-card-title.justify-center Welcome to data about the nba
    v-card-text.text-center 
      v-row(align="center")
        v-col( cols="12" sm="5") Full information can be found about players and teams in the NBA League. The information is provided for free through free APIs that allow full access to the data. In addition, the players / teams table has a button to open a player / team uniquely and then you can send a link to anyone who wants. To contact us, send an email to
          v-btn( link text href="mailto:sagivb13@gmail.com") sagivb13@gmail.com
            v-icon mdi-gmail
        v-col( cols="12" sm="7")
          v-img( src="/lebron.gif" height="50vh" contain )
        v-col( cols="6" sm="4" md="2" v-for="(item, index) in row" :key="index" align-self="start")
          v-icon( v-text="item.icon")
          v-divider 
          span {{item.text}} 
            
</template>
<script>
export default {
  data:()=>({
    row:[
      {text: "free", icon: "mdi-currency-usd"},
      {text: "responsive", icon: "mdi-responsive"},
      {text: "suppot dark mode", icon: "mdi-theme-light-dark"},
      {text: "Installation on devices", icon: "mdi-cellphone"},
      {text: "Saves data", icon: "mdi-access-point-network"},
      {text: "Easily share", icon: "mdi-share-variant"}
    ]
  })
};
</script>
