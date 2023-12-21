<template>
    <section class="ma-10">
      <h3 class=" font-weight-bold">Les concours</h3>
      <v-carousel  hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
            <article>
                <h1 class="title font-weight-bold"> {{ item.title }}</h1>
                <div class="first_div">
                    <img
                        class="icon"
                        height="50"
                        width="50"
                        :src= "item.icon" 
                    />
                    <div class="text">
                        <h4 class="font-weight-bold"> {{ item.subtitle }}</h4>
                        <p class="description"> {{ item.description }}</p>
                    </div>
                </div>
                <img
                    class="img"
                    height="500"
                    width="600"
                    :src="item.image"
                />
            </article>
        </v-carousel-item>
      </v-carousel>
  </section>
</template>

<script>
  import girl_pull_rouge from "../../assets/images/plan-interieur-femme-joyeuse-couvre-visage-manuel-rouge-expression-joyeuse (1).jpg";

export default {
  // export default {
      data() {
          return {
              items: [
                {
                    icon: girl_pull_rouge,
                    description: "azerty qwerty aqwx, rttyreute apza zapm nerty, cddhthrh ee. Borteyez, vnvxwmpe, ayapmlnclnsqhiuazffzeffazarazteetzre",
                    image: girl_pull_rouge,
                    subtitle: "What !!!",
                    title: "Journée Des Etudiants",
                },
                {
                    icon: girl_pull_rouge,
                    description: "azerty qwerty aqwx, rttyreute apza zapm nerty, cddhthrh ee. Borteyez, vnvxwmpe, ayapmlnclnsqhiuazffzeffazarazteetzre",
                    image: girl_pull_rouge,
                    subtitle: "Who !!!",
                    title: "Journée Des Enseignants",
                },
                {
                    icon: girl_pull_rouge,
                    description: "azerty qwerty aqwx, rttyreute apza zapm nerty, cddhthrh ee. Borteyez, vnvxwmpe, ayapmlnclnsqhiuazffzeffazarazteetzre",
                    image: girl_pull_rouge,
                    subtitle: "Why !!!",
                    title: "Journée Des Joueurs",
                },
                {
                    icon: girl_pull_rouge,
                    description: "azerty qwerty aqwx, rttyreute apza zapm nerty, cddhthrh ee. Borteyez, vnvxwmpe, ayapmlnclnsqhiuazffzeffazarazteetzre",
                    image: girl_pull_rouge,
                    subtitle: "What !!!",
                    title: "Journée Des Etudiants",
                },{
                    icon: girl_pull_rouge,
                    description: "azerty qwerty aqwx, rttyreute apza zapm nerty, cddhthrh ee. Borteyez, vnvxwmpe, ayapmlnclnsqhiuazffzeffazarazteetzre",
                    image: girl_pull_rouge,
                    subtitle: "What !!!",
                    title: "Journée Des Etudiants",
                },
              ],
          }
      }    
  // };
};
</script>

<style scoped>

    h3{
        font-size: 1.5rem;
        margin-inline-start: 50px;
    }
    article{
        margin-inline: 80px;
        display: grid;
        grid-template-areas: "title image"
                             "desc image";
    }

    h1{
        grid-area: title;
        font-size: 3.3rem;
    }

    .icon{
        border-radius: 50%;
    }
    .first_div{
        grid-area: desc;
        display: flex;
        gap: 10px;
    }

    .img{
        grid-area: image;
        border-radius: 10%;
    }

</style>


