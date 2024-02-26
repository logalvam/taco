<template>
    <div>
        <div>
            <v-container v-show="shown" class="">
            <v-card width="33vw" class="d-flex">
                    <div class="pa-3"> 
                        <v-img src="../assets/bell.png" height="70" width="70"></v-img>
                    </div>
                    <h2 class="ml-15 mt-8">9874563210</h2>
                    <v-btn class="ml-5 mt-8">copy</v-btn>
                    <v-btn class="ml-5 mt-8" @click="close" align-self-end>close</v-btn>
                </v-card>
            </v-container>
        </div>
    </div>
</template>
<script>
export default{
    name:'',
    data(){
        return{
            show1:false 
        }
    },
    props:{
        shown:Boolean
    },
    methods:{
        close(){
            this.$emit('shows',false)
        }
    }
}
</script>