<template>
    <section>
        <div class="section_title">Rejoindre le cercle</div>
        <div class="section_subtitle"> Rejoindre Le CERADEI <br>DE Trois Façons</div>
        <ElectionIcon class="icon"/>
        <div class="text_1 text-size">
            <h4>Par les élections</h4>
            <p>Vous postulez dans la périodes électorale. <br> Vous êtes ainsi un membre actif</p>
        </div>
        <RecommandationIcon class="icon" />
        <div class="text_2 text-size">
            <h4>Par recommandations</h4>
            <p>Vous avez un potentiel reconnu par la majorité... <br>Vous pouvez être recommandé au cercle.</p>
        </div>
        <CollaborationIcon class="icon" />
        <div class="text_3 text-size">
            <h4>Par collaboration</h4>
            <p>Vous êtes un ancien étudiant, étudiant actuel ou enseignant du département <br>souhaitant juste aider le cercle <br> Vous êtes ainsi un membre passif. </p>
        </div>
        <div class="button_div">
            <v-btn class="pa-7">En savoir plus</v-btn>
        </div>
        <div class="section_image">
            <img src="../../assets/images/plan-interieur-femme-joyeuse-couvre-visage-manuel-rouge-expression-joyeuse (1).jpg" alt="" class="image">
        </div>
        <div class="empty_div"></div>
    </section>
</template>

<style scoped>
    section {
        position: relative;
        display: grid;
        margin: 20px;
        padding-inline-start: 50px;
        grid-template-areas: "section-title    section-title    section-title    section-title section-title"
                             "section-subtitle section-subtitle section-subtitle section-image section-image"
                             "first-icon       text-1           text-1           section-image section-image"
                             "second-icon      text-2           text-2           section-image section-image"
                             "third-icon       text-3           text-3           section-image section-image"
                             "button-div       button-div       button-div       empty-div     empty-div";
    }

    .empty_div{
        grid-area: empty-div;
    }

    .text-size{
        font-size: 1.1em;
    }
    .icon{
        height: 35px;
        width: 35px;
        /* position: absolute; */
        position: relative;
        /* left: 120px; */
    }

    .section_title{
        grid-area: section-title ;
        font-size: 1.5rem;
        font-weight: 700;
    } 
    .button_div{
        grid-area: button-div ;
        display: flex;
        justify-content: flex-end;
    } 

    .image{
        width: 100%;
        height: 100%;
        border-radius: 70px;
    }

    .section_image{
        grid-area: section-image;
        width: 600px;
        height: 500px;
        border-radius: 50px;
    }

    .section_subtitle{
        grid-area: section-subtitle;
        font-size: 2.5rem;
        font-weight: bold;
    }

    .second_icon{
        grid-area: second-icon ;
    } 
    .third_icon{
        grid-area: third-icon ;
    } 
    .first_icon{
        grid-area: first-icon ;
    } 
    .text_2{
        grid-area: text-2;
    }
    .text_3{
        grid-area: text-3;
    }

    .text_1{
        grid-area: text-1;
    }


</style>

<script setup> 
    import CollaborationIcon from '../icons/IconCollaboration.vue';
    import ElectionIcon from '../icons/IconElection.vue';
    import RecommandationIcon from '../icons/IconeRecommandation.vue';
</script>