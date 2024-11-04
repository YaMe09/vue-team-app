<template>
  <v-app class="forside">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h1 :style="{ fontWeight: '700' }">Velkommen</h1>
          <br/>
          <br/><br/><br/><br/>
          <p :style="{ fontWeight: '700' }">Gør noget for at passe på fremtiden</p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <AppknappComponent />
         <router-view/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import AppknappComponent from './components/AppknappComponent.vue';

export default defineComponent({
  components: { AppknappComponent },
  name: 'App',

});
</script>

<style scoped>
.forside {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  background-image: url('./images/forside.svg');
  background-size: cover;
  background-position: center;
  height: 70vh;
  margin-top: 160px;
}

h1 {
  color: black;
  font-size: 48px;
}

p {
  color: black;
  font-size: 20px;
}
</style>
