<template>
    <div>
        <v-btn  @click="logout">logout</v-btn>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        logout(){
            this.$router.push('/')
        }
    }
}
</script>