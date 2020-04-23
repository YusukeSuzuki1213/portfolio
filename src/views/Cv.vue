<template>
  <div class="about-contacts">
    <About />
    <Skills />
    <Contacts />
  </div>
</template>

<script>
import About from "@/components/organisms/About";
import Contacts from "@/components/organisms/Contacts";
import Skills from "@/components/organisms/Skills";

export default {
  components: {
    About,
    Skills,
    Contacts
  }
};
</script>

<style scoped>

</style>