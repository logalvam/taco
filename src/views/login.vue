<template>
<div>
    <v-container fluid class=" d-flex align-center justify-center">

        <v-card class=" " width="350" height="400">
            <div class="d-flex justify-center">
                <h1 class="mt-5">Login Page</h1>
            </div>
            <v-row >
                <v-sheet width="300" class="ml-8 mt-16 d-flex flex-column justify-center" >

                    <v-text-field v-model="username" label="username"> </v-text-field>
                    <v-text-field v-model="password" label="password"> </v-text-field>
                    <v-btn width="200" @click="loginpage" class="success ml-12">Login</v-btn>
                </v-sheet>
            </v-row>
        </v-card>
        
    </v-container>
</div>



</template>
<script>
export default{
    name:'',
    components:{},
    data(){
        return{
            details:this.$store.state.details,
            username:'',
            password:'',
        }
    },
    methods:{
        loginpage(){
            for (var i in this.details){
                if (this.username === this.details[i].username && this.password === this.details[i].password ){
                    this.$router.push('/')
                }
            }
        }
    }
}
</script>
