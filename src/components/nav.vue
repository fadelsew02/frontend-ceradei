
<template>
<<<<<<< HEAD
   <header class="d-flex justify-space-around ma-1">
        <img src="../assets/images/CERADEI1.png" alt="l'icone de Ceradei" />
          <nav>
            <ul class="d-flex  pa-7">
              <li class="ma-2 pa-2">
                <RouterLink to="/">Acceuil</RouterLink>
              </li>
              <li class="ma-2 pa-2">
                <RouterLink to="/academic_space">Espace académique</RouterLink>
              </li>
              <li class="ma-2 pa-2">
                  <RouterLink to="/culturel_space">Espace culturel</RouterLink>
              </li>
              <li class="ma-2 pa-2"> 
                  <RouterLink to="/explore">Explorer</RouterLink>
              </li>
              <li class="ma-2 pa-2">
                  <RouterLink to="/about">A propos</RouterLink>
              </li>
              <li class="ma-2 pa-2">
                <RouterLink to="/help_and_support">Aide et support</RouterLink>
              </li>
              <li class="ma-1 pa-2">
                <v-btn variant="outlined"> <RouterLink to="/join_us">Nous rejoindre </RouterLink> </v-btn>
=======
   <header class="d-flex align-center " style="margin-left: 100px; gap: 15%;">
        <img src="../assets/images/CERADEI1.png" class="ml-0" alt="l'icone de Ceradei" style="" />
          <nav class="">
            <ul class="d-flex align-center">
              <li class="">
                <a href="">Acceuil</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">
              <li class="">
                <a href="">Espace académique</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">
              <li class="">
                  <a href="">Espace culturel</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class=""> 
                  <a href="/explore">Explorer</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class="">
                  <a href="">A propos</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class="">
                <a href="">Aide et support</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class="" style="color: rgba(33, 40, 50, 1);border: 1px; width: 144.23px;height: 39px; top: 47px; border-radius: 5px;">
                <v-btn variant="outlined"> Nous rejoindre </v-btn>
>>>>>>> devSephora
              </li>
            </ul>
          </nav>
      </header>
</template>

<style scoped>
  img{
<<<<<<< HEAD
    width: 120px;
    height: 120px;
=======
    width: 178px;
    height: 176px;
    top:-14px;
>>>>>>> devSephora
  }
  li{
    font-size: large;
    font-family: 'Actor', sans-serif;
    list-style: none;
    font-size: 15px;
    font-weight: 400;
    line-height: 18.05px;
    
  
  }

  li a{
    text-decoration: none;
    color: rgba(0, 0, 0,1);
  }

  
  header {
    position: sticky;
    top: -20px;
<<<<<<< HEAD
    height: 10vh;
    backdrop-filter: blur(10px);
=======
    height: 17vh;
    backdrop-filter: blur(10px);
  }

  .rectangle{
    width: 24px;
    height: 24px;
    top: 55px;
    left: 622px;
    rotate: -90;
    visibility: hidden;
>>>>>>> devSephora
  }


</style>

<script setup>
  import { RouterLink } from 'vue-router';
</script>



