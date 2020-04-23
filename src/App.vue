<template>
  <v-app>
    <AppBar />
    <v-content>
      <About id="about" />
      <Contacts id="contacts" />
      <Skills id="skills" />
      <Works id="works" />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/organisms/AppBar";
import About from "./components/organisms/About";
import Contacts from "./components/organisms/Contacts";
import Skills from "./components/organisms/Skills";
import Works from "./components/organisms/Works";

export default {
  name: "App",

  components: {
    AppBar,
    About,
    Contacts,
    Skills,
    Works,
  },

  data: () => ({
    //
  })
};
</script>
