<template>
  <div id="app">
    <Navbar/>

    <router-view></router-view>
    
    
   
     <footer>  <Footer/>   </footer>
  </div>
  
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Footer,
   
  },
 

};
</script>





<style>
html{
  min-height: 100%;
  position: relative;
}
body{
  margin: 0;
  margin-bottom: 40px;
  
    background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/carbon_fibre.png);
}


 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom:30px;

 
  
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
