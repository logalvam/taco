import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    img:[{src:require("../assets/food1.jpg"),name:'taco'},
    {src:require("../assets/food2.jpg"),name:'Burrito'},
    {src:require("../assets/food3.jpg"),name:'Quesadilla'},
    {src:require("../assets/food4.jpg"),name:'Sharebels'},
    {src:require("../assets/food5.jpg"),name:'Crave & Save'},
    {src:require("../assets/food6.jpg"),name:'Sides'},
      
      // "../assets/food2.jpg",
      // "../assets/food3.jpg",
      // "../assets/food4.jpg",
      // "../assets/food5.jpg",
      // "../assets/food6.jpg"
    ],
    mp4:require("../assets/crave-save.mp4"),
    details:[
      {username:'abcd',password:"1234"},
      {username:'efgh',password:"1234"},
      {username:'ijkl',password:"1234"},
      {username:'mnop',password:"1234"},
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
