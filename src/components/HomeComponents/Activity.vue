<template>
    <section class="ma-10">
        <h3 class="text-center titre font-weight-bold">Les Formations en 2023</h3>
        <h1 class="text-center ">Nos Formateurs</h1>
        <v-carousel cycle hide-delimiters>
            <v-carousel-item>
                <v-container class="container">

                    <v-row no-gutters class="d-flex justify-space-between">
                        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
                            <v-card class=" my-12 rounded-xl elevation-2 py-10" max-width="300" height=auto>
                                <v-img height=auto width=auto :src="images[0]"></v-img>
                                <v-card-item>
                                    <v-card-title class="font-weight-bold">{{ titles[n - 1] }}</v-card-title>
                                </v-card-item>
                                <v-row>
                                    <v-card-text class="text-center">
                                        {{ ateliers[n - 1] }}
                                    </v-card-text>
                                    <v-card-text class="text-center">
                                        {{ level[n - 1] }}
                                    </v-card-text>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                    <DecorIcon class="icon" />

                </v-container>
            </v-carousel-item>
        </v-carousel>
        <v-row class=" d-flex justify-center">
            <v-col-4 class=" text-center d-flex justify-center align-center enveloppe">
                <v-btn variant="" class="btn "> Voir les formations </v-btn>
            </v-col-4>
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
.titre {

    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    line-height: 27px;
    color: rgba(94, 98, 130, 1);
}

.titre+h1 {

    font-size: 50px;
    font-family: 'Volkhov', serif;
    line-height: 64.5px;
    color: rgba(20, 24, 62, 1);

}


.container {
    display: flex;
    justify-content: center;
    position: relative;
}

.icon {
    position: absolute;
    bottom: 100px;
    left: 88%;
    z-index: -1;
}

.enveloppe {
    background-color: rgba(39, 91, 115, 1);
    font-family: 'Actor', sans-serif;
    height: 60px;
    font-weight: 400;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;

}

.btn {
    padding: 10px;
    font-family: 'Actor', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.65px;
    color: rgba(255, 255, 255, 1);
}

h3 {
    font-size: 2em;
}

h1 {
    font-size: 3.5em;
}
</style>
