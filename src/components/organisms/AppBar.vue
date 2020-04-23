<template>
  <v-app-bar app color="black" dark flat>
    <div :class="$style.title">
      <h1>Yusuke's portfolio</h1>
    </div>
    <div :class="$style.contents">
      <v-btn :to="content.to" v-for="(content, index) in contents" :key="index" text>
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
        to: "/"
      },
      {
        text: "CV",
        to: "/cv"
      },
      {
        text: "Works",
        to: "/works"
      },
      {
        text: "Posts",
        to: "/posts"
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
