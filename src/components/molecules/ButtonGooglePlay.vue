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
    title: "Google Play",
    icon: "fab fa-android",
    width: "150px",
    color: "#acc95a"
  })
};
</script>
