<template>
  <v-app>
    <NavBar></NavBar>
    <router-view></router-view>
  </v-app>
</template>
  
<script>
import NavBar from '../components/navBar.vue'

export default {
     components:{
        NavBar,
     }

}
</script>
  