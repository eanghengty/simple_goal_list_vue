const app = Vue.createApp({
  data() {
    return { 
      entered_goal_value:"",
      goals: [] };
  },
  methods:{
    add_goal(){
      this.goals.push(this.entered_goal_value);
    },
    remove_goal(idx){
      this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');
