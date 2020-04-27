<template>
  <section class="hhh">
    <h1 class="text-center font-weight-bold mb-3">Works</h1>
    <div class="works-list">
      <article v-for="(work, index) in works" :key="index" class="work-wrap">
        <figure class="work-img">
          <img :src="work.src" width="500" />
        </figure>
        <div class="work-content">
          <div class="work-text-block-main">
            <h2 class="work-title">{{ work.title }} ~{{ work.subtitle }}~</h2>
            <p class="work-date">{{ work.date }}</p>
            <p class="work-summary">{{ work.summary }}</p>
          </div>
          <div class="work-text-block-bottom">
            <IconList :contents="work.links" :button-size="buttonSize" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Works",
  components: {
    IconList: () => import("@/components/molecules/IconList.vue")
    /* ButtonYoutube: () => import("../molecules/ButtonYoutube"),
    ButtonSite: () => import("../molecules/ButtonSite"),
    ButtonGooglePlay: () => import("../molecules/ButtonGooglePlay"),
    ButtonGoogleColab: () => import("../molecules/ButtonGoogleColab") */
  },
  data: () => ({
    contents: [
      {
        name: "Github",
        icon: "fab fa-github",
        size: "20",
        url: "https://github.com/YusukeSuzuki1213"
      },
      {
        name: "Facebook",
        icon: "fab fa-facebook-f",
        size: "20",
        url: "https://www.facebook.com/rzug84rke"
      }
    ],
    buttonSize: {
      width: "30",
      height: "30"
    },

    works: [
      {
        title: "Smart bath",
        subtitle: "お風呂の全自動化システム",
        src: require("../../assets/images/works/work-1.png"),
        date: "20XX.2.2",
        summary:
          "お風呂設置されたマイクに話しかけると、自動でシャワーを出す、自動でシャンプーを出す、音楽を再生することができます。さらに、お風呂での水の使用料を計測しており、1日の水の使用料をLINEで通知してくれます。",
        links: [
          {
            name: "Youtube",
            icon: "fab fa-youtube",
            size: "20",
            url: "https://www.youtube.com/watch?v=9wnW4UtuwUI"
          },
          {
            name: "Site",
            icon: "fas fa-globe",
            size: "20",
            url: "https://www.inf.shizuoka.ac.jp/news/detail.html?CN=154175"
          }
        ],
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
        date: "2018.2.2",
        summary: "",
        links: [
          {
            name: "Google Play",
            icon: "fab fa-android",
            size: "20",
            url:
              "https://play.google.com/store/apps/details?id=com.clipsoft.coolsnapper&hl=ja&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          }
        ],
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
        date: "2018.2.2",
        summary: "",
        links: [
          {
            name: "Github",
            icon: "fab fa-github",
            size: "20",
            url:
              "https://github.com/YusukeSuzuki1213/fashion-MNIST/tree/d15f6c292e5d79ce8ff03aec0b41d3b916233d61"
          },
          {
            name: "Google Colaboratory",
            icon: "$vuetify.icons.iconGoogleColab",
            size: "22",
            url:
              "https://colab.research.google.com/github/YusukeSuzuki1213/fashion-MNIST/blob/master/Fashion-MNIST.ipynb"
          }
        ],
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
        src: require("../../assets/images/works/work-4.png"),
        date: "2018.2.2",
        summary: "",
        links: [
          {
            name: "Github",
            icon: "fab fa-github",
            size: "20",
            url: "https://github.com/YusukeSuzuki1213/portfolio"
          },
          {
            name: "Site",
            icon: "fas fa-globe",
            size: "20",
            url: "https://yusukesuzuki1213.github.io/portfolio/"
          }
        ],
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

<style scoped lang="scss">
.hhh {
  font-size: 65%;
}
.work-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 15px;
  max-width: 1000px;
  margin: 0 auto;
  .work-img {
    width: 55%;
    @include sp() {
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .work-content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    width: 40%;
    @include sp() {
      width: 100%;
    }
    .work-text-block-main {
      width: 100%;
      .work-title {
      }
      .work-date {
        margin-top: 6px;
        color: #171717;
      }
      .work-summary {
        margin-top: 6px;
        color: #808085;
        font-size: 1.2em;
      }
    }
    .work-text-block-bottom {
    }
  }
}
</style>