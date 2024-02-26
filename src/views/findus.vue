<template>
    <div>
        <v-container fluid>
            <search/>
        </v-container>
        <div>
            <callnow :shown="show1" @shows="shows()"/>
        </div>
        <div>
            <h2>RESTAURANTS OPEN FOR DINE-IN, DELIVERY AND TAKEAWAY</h2>
        </div>
        <v-container fluid row class="pa-16 ">
            <v-flex md4>
            <v-card width="400" height="500" class="pa-1">
                <v-img src="../assets/find1.jpg" width="400" >
                </v-img>
                <v-layout row class="mt-6 ml-2">
                    <v-flex md6>
                        <h4 >Ambience Mall, Vasant Kunj</h4>
                    </v-flex>
                    <v-flex md6>
                        <h4 >Timing : 11 am - 11 pm</h4>
                    </v-flex>
                    <v-flex md12 class="mt-3">
                        <h6>Address: Space No. 8 (T-316 A) on Third Floor, at Ambience Mall, Vasant Kunj, New Delhi, Delhi</h6>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" @click="shown" class="p-1" width="150">Call Now</v-btn>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" class="p-1 ml-1" width="150">Get Direction</v-btn>
                    </v-flex>
                    <v-flex md11 class="mt-3">
                        <v-btn block>Restaurnt Details</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>

            <v-flex md4>
            <v-card width="400" height="500" class="pa-1">
                <v-img src="../assets/find2.png" width="400" >
                </v-img>
                <v-layout row class="mt-6 ml-2">
                    <v-flex md6>
                        <h4 >Mall Of India</h4>
                    </v-flex>
                    <v-flex md6>
                        <h4 >Timing : 11 am - 11 pm</h4>
                    </v-flex>
                    <v-flex md12 class="mt-3">
                        <h6>Address: Food Court Shop no – FC. 08, Fourth Floor, Mall of India, Noida, Plot no. M-03, Sector – 18, Noida, Uttar Pradesh</h6>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" @click="shown" class="p-1" width="150">Call Now</v-btn>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" class="p-1 ml-1" width="150">Get Direction</v-btn>
                    </v-flex>
                    <v-flex md11 class="mt-3">
                        <v-btn block>Restaurnt Details</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>

            <v-flex md4>
            <v-card width="400" height="500" class="pa-1">
                <v-img src="../assets/find3.jpg" width="400" >
                </v-img>
                <v-layout row class="mt-6 ml-2">
                    <v-flex md6>
                        <h4 >Sector-35 C</h4>
                    </v-flex>
                    <v-flex md6>
                        <h4 >Timing : 11 am - 11 pm</h4>
                    </v-flex>
                    <v-flex md12 class="mt-3">
                        <h6>AAddress: SCO No. 453 & 454, Sector 35C, Chandigarh, Punjab</h6>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" @click="shown" class="p-1" width="150">Call Now</v-btn>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" class="p-1 ml-1" width="150">Get Direction</v-btn>
                    </v-flex>
                    <v-flex md11 class="mt-3">
                        <v-btn block>Restaurnt Details</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>

            <v-flex md4>
            <v-card width="400" height="500" class="pa-1">
                <v-img src="../assets/find4.jpg" width="400" >
                </v-img>
                <v-layout row class="mt-6 ml-2">
                    <v-flex md6>
                        <h4 >Cyber Hub</h4>
                    </v-flex>
                    <v-flex md6>
                        <h4 >Timing : 11 am - 11 pm</h4>
                    </v-flex>
                    <v-flex md12 class="mt-3">
                        <h6>Address: Building – 8, Tower – C, 8C/GF/5, DLF Cyber City, Gurugram, Haryana</h6>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" @click="shown" class="p-1" width="150">Call Now</v-btn>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" class="p-1 ml-1" width="150">Get Direction</v-btn>
                    </v-flex>
                    <v-flex md11 class="mt-3">
                        <v-btn block>Restaurnt Details</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>

            <v-flex md4>
            <v-card width="400" height="500" class="pa-1">
                <v-img src="../assets/find5.jpg" width="400" >
                </v-img>
                <v-layout row class="mt-6 ml-2">
                    <v-flex md6>
                        <h4 >VR Mohali</h4>
                    </v-flex>
                    <v-flex md6>
                        <h4 >Timing : 11 am - 11 pm</h4>
                    </v-flex>
                    <v-flex md12 class="mt-3">
                        <h6>Address: Store No. S-29/30/31, 2nd Floor, VR Mall, NH-21, Chandigarh Kharar Road, Sector 118, Sahibzada Ajit Singh Nagar, Mohali, Punjab</h6>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" @click="shown" class="p-1" width="150">Call Now</v-btn>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" class="p-1 ml-1" width="150">Get Direction</v-btn>
                    </v-flex>
                    <v-flex md11 class="mt-3">
                        <v-btn block>Restaurnt Details</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>

            <v-flex md4>
            <v-card width="400" height="500" class="pa-1">
                <v-img src="../assets/find6.jpg" width="400" >
                </v-img>
                <v-layout row class="mt-6 ml-2">
                    <v-flex md6>
                        <h4 >Kamla Nagar, Delhi</h4>
                    </v-flex>
                    <v-flex md6>
                        <h4 >Timing : 11 am - 11 pm</h4>
                    </v-flex>
                    <v-flex md12 class="mt-3">
                        <h6>Address: Shop No. UA27A, Jawahar Nagar, Malka Ganj Road, New Delhi, Delhi</h6>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" @click="shown" class="p-1" width="150">Call Now</v-btn>
                    </v-flex>
                    <v-flex md6 class="mt-3">
                        <v-btn  color="primary" class="p-1 ml-1" width="150">Get Direction</v-btn>
                    </v-flex>
                    <v-flex md11 class="mt-3">
                        <v-btn block>Restaurnt Details</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>

        </v-container>
        <footer1/>
    </div>
</template>
<script>
import search from "../components/search.vue"
import footer1 from "../components/footer.vue"

import callnow from "../components/callnow.vue"
export default{
    name:'',
    data(){
        return{
            show1:false 
        }
    },
    components:{
        search,
        callnow,
        footer1
    },
    methods:{
        shown(){
            this.show1= true
        },
        close(){
            this.show1=false
        },
        shows(value){
            this.show1=value
        }
    }
}
</script>