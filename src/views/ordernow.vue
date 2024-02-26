<template>
    <div>

        <div class="" >

            <v-img src="../assets/small.png" width="100">
            </v-img>
            <!-- <span>TacoBell</span> -->
        </div>
        <div class="mt-16">
        </div>
        <v-container class="d-flex align-center my-5">
            <v-card flat>
                <v-layout row wrap>
                    <v-flex>
                        <div class="caption grey--text">
                            <h3  class="grey--text lighten-3">Let's get ordering</h3>
                        </div>
                        <div>
                            <h1 class="small">Set your delivery location to get started.</h1 >
                        </div>
                    </v-flex>
                   

                </v-layout>
                <v-layout row wrap >
                    <v-flex>
                        <div>
                            
                            <v-btn color="primary" @click="locationpermission">
                                Use my-location
                            </v-btn>
                            <v-text-field
                            label="search steet locally"
                            hide-details="auto"
                            v-models="loc"
                            ></v-text-field>
                            <v-btn flat @click="locationvalidation">Search</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
            <v-card class="ml-16">
                <v-img src="../assets/poster.jpg" width="500">
            </v-img>
            </v-card>
        </v-container>
        <footer1/>

    </div>
</template>
<script>
import footer1 from "../components/footer.vue"
export default{
    name:'',
    data(){
        return{
            loc:'',
            location:['chennai','hydherabadh','covai','pondy','bangalur','mumbai','trichy']
        }
    },
    components:{
        footer1
    },
    methods:{
        locationpermission(){
        confirm('press ok to access the location')
    },
    locationvalidation(){
        for(var i in this.location){
            if (this.loc === i){
                alert('in your location branches available')
            }
        }
    }

    }
}
</script>