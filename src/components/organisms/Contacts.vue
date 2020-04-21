<template>
  <section class="pa-5">
    <h2 class="text-center font-weight-bold mb-3">Contacts</h2>
    <v-container  class="sns-wrap">
      <dir v-for="(content, index) in contents" :key="index">
        <v-btn :href="content.url" target="_blank" icon height="80" width="80">
          <v-icon :size="content.size">{{ content.icon }}</v-icon>
        </v-btn>
      </dir>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Contacts",

  data: () => ({
    contents: [
      {
        name: "Github",
        icon: "fab fa-github",
        size: "40",
        url: "https://github.com/YusukeSuzuki1213",
      },
      {
        name: "Facebook",
        icon: "fab fa-facebook-f",
        size: "40",
        url: "https://www.facebook.com/rzug84rke"
      },
      {
        name: "Qiita",
        icon: "$vuetify.icons.iconQiita",
        size: "55",
        url: "https://qiita.com/YusukeSuzuki1213"
      },
      {
        name: "Twitter",
        icon: "fab fa-twitter",
        size: "40",
        url: "https://twitter.com/ss1ua2zt1us3uki"
      },
      {
        name: "Instagram",
        icon: "fab fa-instagram",
        size: "40",
        url: "https://www.instagram.com/yusuke.suzuki.a/"
      },

    ]
  })
};
</script>

<style scoped>
.sns-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>>
