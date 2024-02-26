<template>
  <div>

    <!-- <v-app >  -->
      <v-avatar
  color=""
  size="56"
>
<v-app-bar-nav-icon  color="black" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
</v-avatar>
       
      <!-- </v-app-bar> -->
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        class="black"
        temporary
      >
        <v-list
          nav
          dense
        >
        <v-img
        lazy-src=""
        max-height="200"
        max-width="100" 
        class="d-flex  justify-center ml-14 mt-10"
        src="../assets/logo-new.png"
        ></v-img>
          <v-list-item-group
            v-model="group"
            class=" text--accent-4 d-flex flex-column mt-16 "
          >
            <v-list-item>
              <v-btn
                    color="primary"
                    elevation="10"
                    large
                    x-large
                    block
                    @click="ordernow"
                    >Order Now</v-btn>
                <!-- <router-link to="/ordernow"> ordernow </router-link> -->
            </v-list-item>
  
            <v-list-item>
              <v-btn
                    color="primary"
                    elevation="10"
                    large
                    x-large
                    block
                    @click="orderfood"

                    >Order Food</v-btn>
            </v-list-item>
  


            
            <v-list-item>
                <v-btn
                    color="primary"
                    elevation="10"
                    large
                    x-large
                    block
                    @click="findus"

                    >Find Us</v-btn>
            </v-list-item>
  
            <v-list-item>
                <v-btn
                    color="primary"
                    elevation="10"
                    large
                    x-large
                    block
                    @click="aboutus"

                    >About Us</v-btn>
            </v-list-item>

            <v-list-item>
                <v-btn
                    color="primary"
                    elevation="10"
                    large
                    block 
                    x-large
                    >More+</v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
<!-- </v-app> -->
</div>

  </template>
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      // mp4:/this.$store.state.mp4
    }),
    methods:{
        ordernow(){
            this.$router.push('/ordernow')
            // window.open('/ordernow')
        },
        orderfood(){
            this.$router.push('/orderfood')
            // window.open('/ordernow')
        },
        findus(){
            this.$router.push('/findus')
            // window.open('/ordernow')
        },
        aboutus(){
            this.$router.push('/aboutus')
            // window.open('/ordernow')
        }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>
.v-application--wrap{
  border: 1px solid black;
}
</style>