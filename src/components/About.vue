<template>
  <section class="pa-5">
    <h2 class="text-center font-weight-bold mb-3">About</h2>
    <v-container>
      <v-row class="text-center">
        <v-col>
          <v-avatar size="200">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-row justify="center">
        <table>
          <tbody>
            <tr v-for="(content, index) in contents" :key="index">
              <td>{{ content.key }}</td>
              <td v-if="content.url">
                <a :href="content.url" target="_blank">{{ content.value }}</a>
              </td>
              <td v-else>{{ content.value }}</td>
            </tr>
          </tbody>
        </table>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    contents: [
      {
        key: "Name:",
        value: "Yusuke Suzuki"
      },
      {
        key: "Barthday:",
        value: "December 12th, 1997"
      },
      {
        key: "Company:",
        value: "ZOZO Technologies, Inc."
      },
      {
        key: "Education:",
        value: "Shizuoka University, Japan Bachelor of Informatics"
      },
      {
        key: "Github:",
        value: "YusukeSuzuki1213",
        url: "https://github.com/YusukeSuzuki1213"
      },
      {
        key: "Qiita:",
        value: "YusukeSuzuki1213",
        url: "https://qiita.com/YusukeSuzuki1213"
      },
      {
        key: "Twitter:",
        value: "@ss1ua2zt1us3uki",
        url: "https://twitter.com/ss1ua2zt1us3uki"
      },
      {
        key: "Facebook:",
        value: "鈴木優佑",
        url: "https://www.facebook.com/rzug84rke"
      },
      {
        key: "Instagram:",
        value: "yusuke.suzuki.a",
        url: "https://www.instagram.com/yusuke.suzuki.a/"
      }
    ]
  })
};
</script>

<style module>
table {
  text-align: left;
}

td {
  padding-left: 30px;
}
</style>
