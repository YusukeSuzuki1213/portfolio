<template>
  <div>
    <article v-for="(article, index) in articles" :key="index" class="article-wrap">
      <figure class="article-img">
        <img :src="article.src" width="500" />
      </figure>
      <div class="article-content">
        <div class="article-text-block-main">
          <h2 class="article-title">{{ article.title }} ~{{ article.subtitle }}~</h2>
          <p class="article-date">{{ article.date }}</p>
          <p class="article-summary">{{ article.summary }}</p>
        </div>
        <div class="article-text-block-bottom">
          <IconList :contents="article.links" :button-size="buttonSize" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  components: {
    IconList: () => import("@/components/molecules/IconList.vue")
  },
  props: {
    articles: {
      type: Object,
      default: () => []
    }
  },
  data: () => ({
    buttonSize: {
      width: "30",
      height: "30"
    }
  })
};
</script>

<style scoped lang="scss">
.article-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 15px;
  max-width: 1000px;
  margin: 0 auto;
  .article-img {
    width: 55%;
    @include sp() {
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .article-content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    width: 40%;
    @include sp() {
      width: 100%;
    }
    .article-text-block-main {
      width: 100%;
      .article-title {
      }
      .article-date {
        margin-top: 6px;
        color: #171717;
      }
      .article-summary {
        margin-top: 6px;
        color: #808085;
        font-size: 1.2em;
      }
    }
    .article-text-block-bottom {
    }
  }
}
</style>
