<template>
  <v-app>
    <AppBar />
    <v-content>
      <HelloWorld />
      <About id="about" />
      <Skills id="skills" />
      <Works id="works" />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components//HelloWorld";
import AppBar from "./components/organisms/AppBar";
import About from "./components/organisms/About";
import Skills from "./components/organisms/Skills";
import Works from "./components/organisms/Works";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
    About,
    Skills,
    Works,
  },

  data: () => ({
    //
  })
};
</script>
