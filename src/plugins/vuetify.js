import '@fortawesome/fontawesome-free/css/all.css';
import IconGoogleColab from '@/components/molecules/icon/IconGoogleColab'
import IconQiita from '@/components/molecules/icon/IconQiita'
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
    values: {
      iconGoogleColab: {
        component: IconGoogleColab
      },
      iconQiita: {
        component: IconQiita
      }
    }
  }
});
