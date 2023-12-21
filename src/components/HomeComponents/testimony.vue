<template>
  <section>
    <aside class="first_aside">
      <h2 class="section_title">Témoignages</h2>
      <p class="section_subtitle">Que Disent Les <br> Étudiants De Nous ?</p>
    </aside>
    <aside class="second_aside">
      <v-carousel  hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
        <v-avatar color="red" class="item_2" >
          <span class="text-h5">{{ item.photo_profile }}</span>
        </v-avatar>
        <v-card
          class=" elevation-4 item"
          max-width="500"
          height="300"
        >
        <div>
          <v-card-text class="text-left text-lg">
            {{ item.comment }}
          </v-card-text>
          <v-card-item class="title">
            <v-card-title class="text-left ml-10 font-weight-bold">{{ item.name }}, {{ item.level }}</v-card-title>
          </v-card-item>
        </div>
        </v-card>
        <v-card class=" elevation-2 item_1" max-width="500" height="75">
          <div>
            <span class="my_span">{{ getNextItem(i).name }}, {{ getNextItem(i).level }}</span>
          </div>
        </v-card>
      </v-carousel-item>
      </v-carousel>
    </aside>
  </section>
</template>



<script>
  export default {
    data () {
      return {
        items: [
          {
            photo_profile: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            comment: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            name: 'Fadel Sewade',
            level: 'RII-1',
          },
          {
            photo_profile: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            comment: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            name: 'Sephora ALAYE',
            level: 'RT-1',
          },
          {
            photo_profile: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            comment: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            name: 'Prince AVOHOU',
            level: 'RII-1',
          },
          {
            photo_profile: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            comment: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            name: 'Florian KOTANMI',
            level: 'RII-1',
          },{
            photo_profile: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            comment: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            name: 'Isidore ANAGONOU',
            level: 'RT-1',
          },
        ],
      }
    },
    methods: {
      getNextItem(currentIndex) {
        // Assurez-vous que l'index ne dépasse pas la longueur du tableau
        const nextIndex = (currentIndex + 1) % this.items.length;
        return this.items[nextIndex];
      },
    },
  }
</script>

<style scoped>
.text-h5{
  color: black;
}

.my_span{
  margin: 50px;
  font-size: larger;
}
.title{
  position: absolute;
  bottom: 20px;
}

.item_2{
  margin-inline-start: 60px;
}
  section{
    display: flex;
    gap: 50px;
    width: 100%;
    margin: 20px;
    margin-top: 60px;
    padding-inline-start: 50px;
  }

  .item_1{
    margin-inline-start: 90px;
    background-color: dimgray;
    opacity: 0.4;
    display: flex;
    align-items: center;

  }


  .item{
    display: flex;
    align-items: center;
    margin-inline-start: 90px;
  }

  .section_title{
        font-size: 1.5rem;
        font-weight: 700;
    } 

    .section_subtitle{
        font-size: 2.5rem;
        font-weight: bold;
    }

  .first_aside{
    width: 35%;
  }

  .second_aside{
    /* background-color: black; */
    width: 45%;
    
  }
</style>