
<template>
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
              </li>
            </ul>
          </nav>
      </header>
</template>

<style scoped>
  img{
    width: 120px;
    height: 120px;
  }
  li{
    font-size: 1.3rem;
    font-family: 'Actor', sans-serif;
    list-style: none;
    font-weight: 400;
  }

  li a{
    text-decoration: none;
    color: rgba(0, 0, 0,1);
  }

  
  header {
    position: sticky;
    top: -20px;
    height: 15vh;
    backdrop-filter: blur(10px);

  }

</style>

<script setup>
  import { RouterLink } from 'vue-router';
</script>



