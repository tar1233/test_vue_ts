<template>
 <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="vertical-center">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});

</script>

     <style lang="css">
    

    @import "../node_modules/bootstrap/dist/css/bootstrap.css";


    
    h1,
    h2,
    h3 {
      margin-bottom: 2rem;
    }
    input {
      margin-bottom: 2rem;
    }
    </style>