<template>
    <section class="ma-10">
        <!-- <v-container> -->
      <h3 class=" font-weight-bold">Les concours</h3>
      <v-carousel  hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
            <article>
                <h1 class="title "> {{ item.title }}....</h1>
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
                    height="600"
                    width="600"
                    :src="item.image"
                />
            </article>
        </v-carousel-item>
      </v-carousel>
    <!-- </v-container> -->
  </section>
</template>

<script>
    import trophy from "../../assets/images/trophy_9128473 1.png";
    import img from "../../assets/images/Rectangle 14.png";
export default {
  // export default {
      data() {
          return {
              items: [
                {
                    icon: trophy,
                    description: "Nous avons pris part au JEP 2023 dans le cadre de la promotion des innovations en fonction du domaine d'études. Nous avons remporté la premiere place",
                    image: img,
                    subtitle: "JEP 2023",
                    title: "Journée Des Etudiants",
                },
                {
                    icon: trophy,
                    description: "Nous avons pris part au JEP 2022 dans le cadre de la promotion des innovations en fonction du domaine d'études. Nous avons remporté la premiere place",
                    image: img,
                    subtitle: "JEP 2022",
                    title: "Journée Des Enseignants",
                },
                {
                    icon: trophy,
                    description: "Nous avons pris part au JEP 2021 dans le cadre de la promotion des innovations en fonction du domaine d'études. Nous avons remporté la premiere place",
                    image: img,
                    subtitle: "JEP 2021",
                    title: "Journée Des Joueurs ",
                },
                {
                    icon: trophy,
                    description: "Nous avons pris part au JEP 2020 dans le cadre de la promotion des innovations en fonction du domaine d'études. Nous avons remporté la premiere place",
                    image: img,
                    subtitle: "JEP 2020",
                    title: "Journée Des Etudiants ",
                },
              ],
          }
      }    
  // };
};
</script>

<style scoped>
    h3{
        color: var(--TEXT-CLR, #5E6282);
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-inline-start: 200px;
    }
    article{
        margin-inline: 80px;
        display: grid;
        gap: 15px;
        grid-template-areas: "title image"
                             "desc image"
                             "esc   image";
    }
    .title{
        color: var(--3rd, #14183E);
        font-family: Volkhov;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
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
        position: relative;
        top: 100px;
        left: 100px;
        font-size: 1.3rem;
    }

    .img{
        grid-area: image;
        border-radius: 10%;
    }

</style>


