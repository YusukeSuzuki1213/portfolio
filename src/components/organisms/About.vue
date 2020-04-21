<template>
  <section class="pa-5">
    <h2 class="text-center font-weight-bold mb-3">About</h2>
    <v-container>
      <v-row class="text-center">
        <v-col>
          <v-avatar size="200">
            <img src="../../assets/images/my-icon.jpeg" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-row justify="center">
        <table :class="$style.tableAbout">
          <tbody>
            <tr v-for="(content, index) in contents" :key="index">
              <td :class="$style.tdAbout">{{ content.key }}</td>
              <td :class="$style.tdAbout" v-if="content.url">
                <a :href="content.url" target="_blank">{{ content.value }}</a>
              </td>
              <td v-else :class="$style.tdAbout">{{ content.value }}</td>
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
      }
    ]
  })
};
</script>

<style module>
.tableAbout {
  text-align: left;
}

.tdAbout {
  padding-left: 30px;
  padding-top: 5px;
}
</style>
