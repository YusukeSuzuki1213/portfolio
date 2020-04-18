<template>
  <v-btn
    class="ma-2"
    tile
    outlined
    depressed
    :color="color"
    :width="width"
    :href="href"
    target="_blank">
    <v-icon left :color="color">{{ icon }}</v-icon>
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    href: String
  },
  data: () => ({
    title: "Site",
    icon: "fas fa-globe",
    width: "150px",
    color: "blue"
  })
};
</script>
