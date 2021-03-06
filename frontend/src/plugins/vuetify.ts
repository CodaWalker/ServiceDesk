import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import ru from 'vuetify/src/locale/ru'

/* Поправил, чтобы не высвечивалась ошибка
import Vuetify from 'vuetify/lib' */

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  customProperties: true,
  iconfont: 'mdi',
  lang: {
    locales: { ru },
    current: 'ru'
  },
})
