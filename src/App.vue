<template>
  <!-- <div> -->
  <v-app>
    <!-- <ordernow/> -->
    <!-- <orderfood/> -->
    <!-- <findus/> -->
    <!-- <aboutus/> -->
    <!-- <v-btn @click="tocohome">home</v-btn> -->
    <!-- <router-link to="/tocohome">home</router-link> -->
    <!-- <v-main> -->
      <navbar/>
      <v-card class="d-flex justify-center ml-16 mt-n12"> 
        <h1>TOCA BELL</h1>
      </v-card>
      <router-view />
    <!-- </v-main> -->
  </v-app>
<!-- </div> -->

</template>

<script>
import navbar from "../src/components/nav-bar.vue"

// import ordernow from "./views/ordernow.vue"
// import orderfood from "./views/orderfood.vue"
// import findus from "./views/findus.vue"
// import aboutus from "./views/About.vue"

export default {
  name: "App",

  data: () => ({
    fname:'loko',
    drawer: false,
      group: null,
    lname:'oklo'
    //
  }),
  methods:{
    tocohome(){
      this.$router.push('/tohome')
    }
  },
  components:{
    navbar,
    // ordernow,
    // orderfood,
    // findus,
    // aboutus
},
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
