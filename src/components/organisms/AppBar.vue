<template>
  <v-app-bar app color="black" dark flat>
    <div :class="$style.title">
      <h1>Yusuke's portfolio</h1>
    </div>

    <div :class="$style.contents">
      <v-btn
        v-for="(content, index) in contents"
        :key="index"
        href="#"
        v-scroll-to="content.to"
        text
      >
        <span class="mr-2">{{ content.text }}</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  data: () => ({
    contents: [
      {
        text: "Top",
        to: "#top"
      },
      {
        text: "About",
        to: "#about"
      },
      {
        text: "Skills",
        to: "#skills"
      },
      {
        text: "Works",
        to: "#works"
      },
      {
        text: "Posts",
        to: "#posts"
      }
    ]
  })
};
</script>
<style module>
.title {
  margin-right: auto;
}

.contents {
  margin-left: auto;
}

h1 {
  font-size: 20px;
}
</style>
