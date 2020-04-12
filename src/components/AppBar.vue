<template>
  <v-app-bar app color="black" dark flat>
    <div :class="$style.title">
      <h1>Yusuke's portfolio</h1>
    </div>

    <div :class="$style.contents">
      <v-btn
        v-for="(content, index) in contents"
        :key="index"
        :href="content.url"
        target="_blank"
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
        url: "https://github.com"
      },
      {
        text: "About",
        url: "https://github.com"
      },
      {
        text: "Skills",
        url: "https://github.com"
      },
      {
        text: "Works",
        url: "https://github.com"
      },
      {
        text: "Posts",
        url: "https://github.com"
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