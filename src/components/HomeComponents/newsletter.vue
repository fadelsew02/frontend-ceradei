<template>
    <v-row class="mx-10 my-15 newsletter">
        <v-col>
            <SendIcon class="sendIcon" />
            <div class="cadre ml-15 mt-1  d-flex flex-column align-center font-weight-600 justify-space-between ">
                <div class="my-15 title  text-center">Souscrire pour se mettre au parfum de nos news</div>
                <v-form class="d-flex flex-row align-center form mb-15" style="width: 70%;">
                    <MailIcon class="mailIcon" />
                    <v-text-field label="Votre adresse email" v-model="email" prepend-icon="mdi-email-outline" Solo
                        hide-details class="fill-height-input custom-text-field"></v-text-field>
                    <v-btn type="submit" class="text-center ms-10 h-100 envoyer" style="width: 28%;">Souscrire</v-btn>
                </v-form>
            </div>
            <!-- <div class="main">
                <div class="ellipse_1"></div>
                <div class="ellipse_2"></div>
                <div class="ellipse_3"></div>
                <div class="ellipse_4"></div>
                <div class="ellipse_5"></div>
                <div class="ellipse_6"></div>
            </div>
            <div>

            </div> -->

            <div class="image">
                <img src="../../assets/images/Group 5.png" alt="">
            </div>
        </v-col>
    </v-row>
</template>

<style scoped>
.main {
    background-color: black;
    width: 390px;
    height: 390px;
    position: absolute;
    top: 100px;
    z-index: -1;
    overflow: hidden;
}

.ellipse_1 {
    position: inherit;
    width: 252px;
    height: 252px;
    border-radius: 50%;
    border: 1px solid var(--2nd, #6246E5);
    opacity: .1;
}

.title {
    color: var(--TEXT-CLR, #5E6282);
    text-align: center;
    font-family: Poppins;
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
}

.newsletter {
    height: 50vh;
    position: relative;

    /* overflow: hidden; */
    /* background-color: red; */
    /* width: 87%; */
}

.mailIcon {
    position: absolute;
    top: 40%;
    left: 10px;
}

.form {
    position: relative;
}

.sendIcon {
    position: absolute;
    top: 0;
    left: 87%;
    z-index: 1;
}

.cadre {
    border-radius: 129px 20px 20px 20px;
    opacity: 0.5;
    background: var(--light-color, #DFD7F9);
    width: 87%;
    font-size: 30px;
    height: 90%;
    /* background-color: black; */

}

.image {
    position: relative;
    left: 88%;
    top: -15%;
}

.texteformulaire {
    margin-bottom: 5%;
    height: 12vh;
    width: 10%;
}

.fill-height-input {
    height: 100%;
}

.envoyer {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 23.15px;
    background-color: #FF946D;
    color: #fff;
}

.custom-text-field {
    font-size: 14px;
    line-height: 17.07px;
    color: #39425D;
    font-family: 'Montserrat', sans-serif;
    background-color: #fff;
}</style>

<script setup>
import SendIcon from '../icons/IconSend.vue';
import MailIcon from '../icons/IconMail.vue';
</script>