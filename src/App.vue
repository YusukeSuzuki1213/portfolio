<template>
  <v-app>
    <AppBar />
    <v-content>
      <HelloWorld />
      <About />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/AppBar";
import About from "./components/About";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
    About
  },

  data: () => ({
    //
  })
};
</script>
