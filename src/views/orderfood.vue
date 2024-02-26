<template>
    <div>
        <v-container>
            
            <v-card class="d-flex justify-center">
                <!-- <v-layout row wrap> -->
                    <!-- <v-flex > -->
                        <div >
                            <h1>
                                THE LINE-UP
                            </h1>
                        </div>
                    <!-- </v-flex> -->
                <!-- </v-layout> -->
            </v-card>
        </v-container>



        <v-container fluid row class="">
            <!-- <v-sheet height="80vh" color="green" > -->
                <div  v-for=" (items,i) in src1" :key="i">
                    
                    <v-cols cols="4">
                        <v-card
                        class="ma-4"
                        width="30vw"
                        height=""
                        >
                        <v-img :src =items.src
                        height="300px"
                        ></v-img>
                        <v-card-title @click="details">
                            {{ items.name }}
                        </v-card-title>
                    </v-card>
                </v-cols>

                    <!-- <v-flex md4 >
                        <v-card
                        class=""
                        width="80vw"
                        height=""
                        >
                        <v-img :src =items.src
                        height="300px"
                        ></v-img>
                        <v-card-title class="">
                            Tacos
                        </v-card-title>
                    </v-card>
                </v-flex> -->
            </div>
            
        <!-- </v-sheet> -->
        <!--  -->
        <!-- <v-card
            class="mx-auto "
            max-width="344"
            >
            <v-img
            src="../assets/food2.jpg"
            height="200px"
            ></v-img>
            <v-card-title class="">
                Tacos
            </v-card-title>
        </v-card>

        <v-card
            class="mx-auto "
            max-width="344"
            >
            <v-img
            src="../assets/food3.jpg"
            height="200px"
            ></v-img>
            <v-card-title class="">
                Tacos
            </v-card-title>
        </v-card>

        <v-card
            class="mx-auto "
            max-width="344"
            >
            <v-img
            src="../assets/food4.jpg"
            height="200px"
            ></v-img>
            <v-card-title class="">
                Tacos
            </v-card-title>
        </v-card>

        <v-card
            class="mx-auto "
            max-width="344"
            >
            <v-img
            src="../assets/food6.jpg"
            height="200px"
            ></v-img>
            <v-card-title class="">
                Tacos
            </v-card-title>
        </v-card> -->
        </v-container>
        <v-container>
            <v-carousel v-model="model">
    <v-carousel-item
      v-for="(image, i) in img"
      :key="i"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <!-- <v-row
          class="fill-height"
          align="center"
          justify="center"
        > -->
        <v-img :src="image.src" width="100vw"></v-img>
        <!-- </v-row> -->
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

        </v-container>
      <taconews/>
    <footer1/>        
    </div>
</template>
<script>
import taconews from "../components/taconews.vue"
import footer1 from "../components/footer.vue"

export default{
    name:'',
    components:{
        taconews,
        footer1
    },
    data(){
        return{
            src1:this.$store.state.img,
            model: 0,
      img: [{src:require("../assets/slide1.jpg")},
      {src:require("../assets/slide2.jpg")},
      {src:require("../assets/slide3.jpg")},
      {src:require("../assets/slide4.jpg")},
      ],
      foodname:this.$store.state.foodname
        }
    },
    methods:{
        details(){
            alert('this is details')
        }
    }
}
</script>