<template>
      <section class="ma-10">
        <h3 class="text-center font-weight-bold">Les Formations en 2023</h3>
        <h1 class="text-center font-weight-bold">Nos Formateurs</h1>
        <v-container class="container">
            <v-row no-gutters class="d-flex justify-space-between">
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    sm="4"
                >
                    <v-card
                        class=" my-12 rounded-xl elevation-2 py-10"
                        max-width="350"
                        height=auto
                    >
                        <v-img
                            height=auto
                            width=auto
                            :src= "images[0]" 
                        ></v-img>
                        <v-card-item>
                            <v-card-title class="font-weight-bold">{{ titles[n-1] }}</v-card-title>
                        </v-card-item>
                        <v-row>
                            <v-card-text class="text-center">
                               {{ ateliers[n-1] }}
                            </v-card-text>
                            <v-card-text class="text-center">
                               {{ level[n-1] }}
                            </v-card-text>
                        </v-row>
                    </v-card>
                    
                </v-col>
                
            </v-row>
            <DecorIcon class="icon"/>
            
        </v-container>
        <v-row class="d-flex justify-center">
                <v-btn variant="tonal" class="btn"> Voir les formations </v-btn>
            </v-row>
    </section>
</template>

<script setup>
import DecorIcon from '../icons/IconDecor.vue';
</script>

<script>
    import girl_pull_rouge from "../../assets/images/jeune-femme-coupe-cheveux-afro-portant-pull-rose.jpg";
    
export default {
  name: 'MyActivity', 

    // export default {
        data() {
            return {
                images: [
                  girl_pull_rouge
                ],
                titles: [
                    'Florian KOTANMI',
                    'Prince AVOHOU',
                    'Sephora ALAYE'
                ],
                ateliers: [
                    "Electronique",
                    "Electronique",
                    "Electronique"
                ],
                level: [
                    "RII 1",
                    "RII 1",
                    "RT 1"
                ]
            }
        }    
    // };
};
</script>

<style scoped>

.container{
    /* background-color: red; */
    display: flex;
    justify-content: center;
    position: relative;
}

.icon{
    position: absolute;
    bottom: 100px;
    left: 88%;
    z-index: -1;
}
    .btn{
        background-color: #275B73;
        padding: 10px;
    }

    h3{
        font-size: 2em;
    }
    h1{
        font-size: 3.5em;
    }
</style>


