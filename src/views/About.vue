<template>
  <v-app class="">
    <!-- <v-container > -->
      <v-card width="100vw" height="50vh">
        <v-img src="../assets/find3.jpg" width="97vw" height="48vh" class="ma-3">
        <v-layout>
          <v-flex >
            <!-- <v-sheet color="none" class="d-flex justify-center" height="50vh" > -->

              <div class="mt-5 d-flex justify-center ">
                
                <h2 class=" white--text " height="50vh" >THE TACO BELL JOURNEY</h2>
              </div>
            <!-- </v-sheet>  -->
        </v-flex>
        </v-layout>
        </v-img>
      </v-card>
      <div>
        <v-timeline>
    <v-timeline-item>
      <v-card width="400">
        <v-img src="../assets/time1.jpg">
        </v-img>
        <p class="text-md-center">Glen Bell was born on 3rd September 1923. After graduation he served in the U.S. Marine Corps as a cook during the World War-II. He started with the idea of selling crispy-shell tacos from the window of his hamburger stand which really got popular and became the foundation of Taco Bell.</p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item class="text-right">
      <v-card width="400">
        <v-img src="../assets/time2.jpg">
        </v-img>
        <p class="text-md-center">Glen Bell opens his first Taco Bell restaurant in Downey, CA, serving what his customers called "Tay-Kohs."</p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item>
      <v-card width="400">
        <v-img src="../assets/time3.jpg">
        </v-img>
        <p class="text-md-center">Taco Bell goes public with a total of 325 restaurants.</p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item class="text-right">
      <v-card width="400">
        <v-img src="../assets/time4.jpg">
        </v-img>
        <p class="text-md-center">Taco Bell opens its first restaurant in India</p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item>
      <v-card width="400">
        <v-img src="../assets/time5.png">
        </v-img>
        <p class="text-md-center">Burman Hospitality becomes Taco Bells first franchisee in India</p>
      </v-card>
    </v-timeline-item>

    <v-timeline-item class="text-right">
      <v-card width="300">
        <v-img src="../assets/time6.jpg">
        </v-img>
        <p class="text-md-center">Burman Hospitality opens first Taco Bell restaurant in Delhi</p>
      </v-card>
    </v-timeline-item>

    <v-timeline-item>
      <v-card width="400">
        <v-img src="../assets/time7.jpg">
        </v-img>
        <p class="text-md-center">Taco Bell names Burman Hospitality as master franchise partner </p>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <v-spacer></v-spacer>


  <v-container class="d-flex flex-row">
    <v-flex  md6>
        <v-col class=" " cols="12">
          
          <v-card width="400">
            <v-img width="400" src="../assets/img1.jpg">
            </v-img>
            <h2 class="mt-10">OUR RESTAURANTS</h2>
            <p class="mt-10 text-md-center">Along with our open kitchen design and our California inspired contemporary decor, you'll find a mix of seating areas, music and lighting to make you feel at home.
            </p>
          </v-card>
        </v-col>
    </v-flex>

    <v-flex md6>
        <v-col class=" ml-16" cols="12">
          
          <v-card class="ml-8" width="400">
            <v-img width="400" src="../assets/img1.jpg">
            </v-img>
            <h2 class="mt-10">OUR FOOD</h2>
            <p class="mt-10 text-md-center">We pride ourselves on our craveable Mexican-Inspired menu, along with our standards on food safety and product quality.


            </p>
          </v-card>
        </v-col>
        <v-col class=" ml-16" cols="12">
          
          <v-card class="ml-8" width="400">
            <v-img width="400" src="../assets/img1.jpg">
            </v-img>
            <h2 class="mt-10">OUR PEOPLE</h2>
            <p class="mt-10 text-md-center">We have a maniacal focus on our customers and we always celebrate the accomplishments of our people. Sound like you?</p>
          </v-card>
        </v-col>
    </v-flex>

    </v-container>
  </div>
  <!-- </v-container>/ -->
    <footer1/>
  </v-app>
</template>
<script>
import footer1 from "../components/footer.vue"
export default{
  components:{
    footer1
  }
}
</script>
