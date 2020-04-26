<template>
  <section class="pa-5">
    <h2 class="text-center font-weight-bold mb-3">Contacts</h2>
    <IconList :contents="contents" :button-size="buttonSize"/>
  </section>
</template>

<script>
export default {
  name: "Contacts",

  components: {
    IconList: () => import("@/components/molecules/IconList.vue")
  },
  data: () => ({
    contents: [
      {
        name: "Github",
        icon: "fab fa-github",
        size: "40",
        url: "https://github.com/YusukeSuzuki1213"
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
      }
    ],
    buttonSize: {
      height: "80",
      width: "80"
    }
  })
};
</script>