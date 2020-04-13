<template>
  <v-app>
    <AppBar />
    <v-content>
      <HelloWorld />
      <About id="about" />
      <Skills id="skills" />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/AppBar";
import About from "./components/About";
import Skills from "./components/Skills";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
    About,
    Skills
  },

  data: () => ({
    //
  })
};
</script>
