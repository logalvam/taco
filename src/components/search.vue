<template>
    <div>
        <div class="d-flex justify-center">

            <v-banner 
            elevation="10"
            width="900">
            <v-layout>
                <v-icon slot="icon" size="40" class="mt-n3" color="info">mdi-account-search</v-icon>
                
                <v-overflow-btn 
                class="my-2"
                :items="dropdown_state"
                label="State"
                :item-state="text"
                ></v-overflow-btn>

                <v-overflow-btn 
                class="my-2"
                :items="dropdown_city"
                label="City"
                :item-city="text"
                ></v-overflow-btn>

                <v-overflow-btn 
                class="my-2"
                :items="dropdown_local"
                label="Locality"
                itemlocal="text"
                ></v-overflow-btn>
                <v-btn class="mt-3" :loading="loading" @click="search()">Search</v-btn>
            </v-layout>
        </v-banner>
    </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
        itemCity:'',
        loading:false,
        itemlocal:'',
        itemState:'',
      dropdown_state: [
        { text: 'Tamil Nadu' },
        { text: 'Kerala' },
        { text: 'Karnataka' },
        { text: 'Andra Predesh' },
        { text: 'Telungana' },
      ],
      dropdown_city: [
        { text: 'Chennai' },
        { text: 'Coimbatore' },
        { text: 'Madurai' },
        { text: 'Tiruchirappalli' },
        { text: 'Salem' },
      ],
      dropdown_local: [
        { text: 'ANNA NAGAR' },
        { text: 'Sengundram' },
        { text: 'Royapuram' },
        { text: 'Korukkupet' },
        { text: 'Vyasarpadi' },
        { text: 'Perambur' },
        { text: 'Tondiarpet' },
        { text: 'Tiruvottiyur' },
        { text: 'Ennore' },

      ]

    }),
    methods:{
        search(){
            this.loading=true
            setTimeout(() => {
                this.loading=false
            }, 3000);
        }
    }
  }
</script>