<template>
    <section class="ma-10">
        <!-- <v-container> -->
      <h3>Les Tournois sportifs</h3>
      <v-carousel  hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
            <article>
                <h1 class="title font-weight-bold"> {{ item.title }} ...</h1>
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
  import image from "../../assets/images/Rectangle 14.svg";
  import cup from "../../assets/images/competition_5432899 1.png";

export default {
  // export default {
      data() {
          return {
              items: [
                {
                    icon: cup,
                    description: "Nous formons une équipe harmonieuse avec la GE où nous participons chaque année au tournoi de foot organisé par l'Epac",
                    image: image,
                    subtitle: "Epac Cup",
                    title: "Tournoi de Football",
                },
                {
                    icon: cup,
                    description: "Nous formons une équipe harmonieuse avec la GE où nous participons chaque année au tournoi de foot organisé par l'Epac",
                    image: image,
                    subtitle: "Epac Cup",
                    title: "Tournoi de Football",
                },
                {
                    icon: cup,
                    description: "Nous formons une équipe harmonieuse avec la GE où nous participons chaque année au tournoi de foot organisé par l'Epac",
                    image: image,
                    subtitle: "Epac Cup",
                    title: "Tournoi De Football",
                },
                {
                    icon: cup,
                    description: "Nous formons une équipe harmonieuse avec la GE où nous participons chaque année au tournoi de foot organisé par l'Epac",
                    image: image,
                    subtitle: "Epac Cup",
                    title: "Tournoi de Football",
                },
              ],
          }
      }    
  // };
};
</script>

<style scoped>
.title{
    color: var(--3rd, #14183E);
    font-family: Volkhov;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}

    h3{
        color: var(--TEXT-CLR, #5E6282);
        text-align: center;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* position: relative;
        left: 700px; */
    }
    article{
        margin-inline: 80px;
        display: grid;
        gap: 50px;
        grid-template-areas: "image title"
                             "image desc"
                             "image esc";
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
        top: 70px;
        font-size: 1.3rem;
    }

    .img{
        grid-area: image;
        border-radius: 10%;
    }

</style>


