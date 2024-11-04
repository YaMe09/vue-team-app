<template>
<v-container  class="nav" :style="{ backgroundColor:'#E9E5E5'}"><br/>
  <v-toolbar app  :style="{ backgroundColor:'#E9E5E5'}">
    <v-col class="d-flex align-center">

      <a href="app">
        <img class="right" src="../images/heroicons_home-20-solid.svg" />
      </a>
      <a href="/info">
        <img class="righ" src="../images/info.svg" />
      </a>
    </v-col>
    <v-spacer></v-spacer>
     <v-toolbar-title>
      <v-row>
        <v-col class="d-flex align-center">
          <img class="lef" src="../images/100.svg" />
          <img class="left" src="../images/fa-solid_award.svg" />
        </v-col>
      </v-row>
    </v-toolbar-title>
  </v-toolbar>

<br/>
  <div class="anden-nav">
    <a href="/transportComponent" @click="setActive('transportComponent')">
      <img :class="{ active: activeImage === 'transport' }" src="../images/transport.svg" />
    </a>
    <img :class="{ active: activeImage === 'el' }" @click="setActive('el')" src="../images/El-forbruge.svg" />
    <img :class="{ active: activeImage === 'genbruge' }" @click="setActive('genbruge')" src="../images/Genbruge.svg" />
    <img :class="{ active: activeImage === 'madspile' }" @click="setActive('madspile')" src="../images/Madspile.svg" />
  </div>
</v-container>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavComponent',
  setup() {
    const activeImage = ref('');

    const setActive = (image) => {
      activeImage.value = image;
    };

    return {
      activeImage,
      setActive,
    };
  },
});
</script>

<style scoped>
.left, .lef {
  width: 35px;
  margin-left: 15px;
}
.lef {
  width: 55px;
}
.right, .righ {
  width: 45px; /* Juster størrelserne som ønsket */
  padding-top: 5px;
  margin-left: 15px;
}
.anden-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  width: 500px;
  height: 92px;
  border-radius: 18px;
  border: solid 1px #E4E5E4;
  box-shadow: #fff 2px 2px 2px;
  opacity: 0.9;
}

.anden-nav img {
  width: 50px;
  padding-top: 5px;
  transition: all 0.3s ease;
}

.active {
  transform: scale(1.2);
  border: 5px solid #E4E5E4;
  box-shadow: 0 0 10px rgba(189, 185, 185, 0.5);
}

</style>
