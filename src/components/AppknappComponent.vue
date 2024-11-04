<template>
  <v-container fluid fill-height>
    <router-link to="/transportComponent">
      <v-btn rounded="xl" size="x-large" variant="flat" :style="{ backgroundColor: 'rgb(62, 122, 0)', width: '358px' }">
        Kom i gang
      </v-btn>
    </router-link>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppknappComponent',

});
</script>
