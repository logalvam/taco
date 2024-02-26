<template>
    <div>
      <div class="d-flex justify-end">
        <v-card width="90"  class="d-flex justify-center mt-n12"> 
          <v-btn @click="loginrequired">login</v-btn>
        </v-card>
      </div>
      <div class="d-flex justify-center align-center">
        <v-sheet class="" height="100vh" width="100vw">
          
          <video controls="true" autoplay>
            <source src="../assets/crave-save.mp4" type="video/mp4">
          </video>
        </v-sheet>
        
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  
  name: "Home",
  components: {
  },
  data(){
    return{

    }
  },
  methods:{
    loginrequired(){
      this.$router.push('/login')
    }
  }
};
</script>
