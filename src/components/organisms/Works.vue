<template>
  <v-container>
    <h2 class="text-center font-weight-bold mb-3">Works</h2>
    <div :class="$style.worksWrap">
      <v-card
        v-for="(work, index) in works"
        :key="index"
        hover
        class="mx-auto"
        max-width="400"
        :class="$style.cardWrap"
      >
        <v-img class="white--text align-end" height="200px" :src="work.src">
          <v-card-title class="font-weight-black">{{ work.title }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0 text-center font-italic font-weight-bold">
          {{
          work.subtitle
          }}
        </v-card-subtitle>
        <v-card-text class="text--prximary">
          <div>
            <div v-for="(section, index) in work.sections" :key="index" :class="$style.cardTetWrap">
              <div>{{ section.title }}</div>
              <div :class="$style.tdWorksValue">
                <ul :class="$style.ulTdWorksValue">
                  <li v-for="(value, index) in section.list" :key="index">{{ value }}</li>
                </ul>
              </div>
            </div>
            <div :class="$style.linkWrap">
              <button-youtube v-if="work.links.youtube.length" :href="work.links.youtube"></button-youtube>
              <button-site v-if="work.links.site.length" :href="work.links.site"></button-site>
              <button-google-play v-if="work.links.googlePlay.length" :href="work.links.googlePlay"></button-google-play>
              <button-google-colab v-if="work.links.googleColab.length" :href="work.links.googleColab"></button-google-colab>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Works",
  components: {
    ButtonYoutube: () => import("../molecules/ButtonYoutube"),
    ButtonSite: () => import("../molecules/ButtonSite"),
    ButtonGooglePlay: () => import("../molecules/ButtonGooglePlay"),
    ButtonGoogleColab: () => import("../molecules/ButtonGoogleColab")
  },
  data: () => ({
    works: [
      {
        title: "Smart bath",
        subtitle: "お風呂の全自動化システム",
        src: require("../../assets/images/works/work-1.png"),
        links: {
          youtube: "https://www.youtube.com/watch?v=9wnW4UtuwUI",
          site: "https://www.inf.shizuoka.ac.jp/news/detail.html?CN=154175",
          gitthub: "",
          googlePlay: "",
          googleColab: ""
        },
        sections: [
          {
            title: "使用技術",
            list: ["Python", "Rasberry Pi 3", "IFTTT"]
          },
          {
            title: "受賞等",
            list: [
              "みんなのラズパイコンテスト2017 ラズベリーパイ財団賞",
              "2018年後期 静岡大学 学長表彰"
            ]
          }
        ]
      },
      {
        title: "Cool Snapper",
        subtitle: "カッコ良くページをめくる",
        src: require("../../assets/images/works/work-2.png"),
        links: {
          youtube: "",
          site: "",
          gitthub: "",
          googlePlay:
            "https://play.google.com/store/apps/details?id=com.clipsoft.coolsnapper&hl=ja&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
          googleColab: ""
        },
        sections: [
          {
            title: "使用技術",
            list: ["Android", "Kotlin"]
          },
          {
            title: "説明等",
            list: [
              "Google Playでリリースしています",
              "アルバイトとして、有限会社クリップソフトにて設計から開発まで、1人で担当させていただきました"
            ]
          }
        ]
      },
      {
        title: "Fashion MNIST",
        subtitle: "衣服画像の分類",
        src: require("../../assets/images/works/work-3.png"),
        links: {
          youtube: "",
          site: "",
          gitthub: "",
          googlePlay: "",
          googleColab:
            "https://colab.research.google.com/github/YusukeSuzuki1213/fashion-MNIST/blob/master/Fashion-MNIST.ipynb"
        },
        sections: [
          {
            title: "使用技術",
            list: ["Python", "Keras", "Jupyter notebook"]
          },
          {
            title: "説明等",
            list: ["機械学習勉強会の資料として公開しました"]
          }
        ]
      },
      {
        title: "Portfolio Site",
        subtitle: "ポートフォリオサイト",
        src: require("../../assets/images/works/work-3.png"),
        links: {
          youtube: "",
          site: "this page",
          gitthub: "",
          googlePlay: "",
          googleColab: ""
        },
        sections: [
          {
            title: "使用技術",
            list: ["Vue.js", "HTML/CSS"]
          },
          {
            title: "説明等",
            list: ["このポートフォリオサイトです"]
          }
        ]
      }
    ]
  })
};
</script>

<style module>
.tdWorksValue {
  padding-left: 30px;
}
.cardTextWrap {
  padding-bottom: 10px;
}
.ulTdWorksValue {
  display: block;
}
.linkWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.worksWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.cardWrap {
  margin: 20px;
}
</style>
