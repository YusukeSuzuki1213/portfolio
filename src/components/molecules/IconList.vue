<template>
  <div class="icon-list-wrap">
    <div v-for="(content, index) in contents" :key="index">
      <v-btn
        :href="content.url"
        target="_blank"
        icon
        :height="buttonSize.height"
        :width="buttonSize.width"
      >
        <v-icon :size="content.size">{{ content.icon }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Object,
      default: () => ({})
    },
    buttonSize: {
      type: Object,
      default: () => ({
        height: "80",
        width: "80"
      })
    }
  }
};
</script>

<style scoped>
.icon-list-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>>