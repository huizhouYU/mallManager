// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import MyServerHttp from '@/plugins/http.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'


import './permission'
import '../../mallManager/src/assets/js/directive.js'


import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'xxxxxx', //申请的key码需要填写的地方，格式为长串字符数字
  plugin: [ //按照你的需要，引入地图的哪些功能，不需要下面这么多
    'AMap.Autocomplete', //输入提示插件
    'AMap.PlaceSearch', //POI搜索插件
    'AMap.Scale', //右下角缩略图插件 比例尺
    'AMap.OverView', //地图鹰眼插件
    'AMap.ToolBar', //地图工具条
    'AMap.MapType', //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    'AMap.PolyEditor', //编辑 折线多，边形
    'AMap.CircleEditor', //圆形编辑器插件
    'AMap.Geolocation', //定位控件，用来获取和展示用户主机所在的经纬度位置
    'MarkerClusterer',
    'AMap.HeatMap',
    'AMap.DistrictLayer',
    'AMap.Heatmap',
    'AMap.DistrictSearch',
    'AMap.Object3DLayer'
  ],
  v: '2.0', // 默认高德 sdk 版本为 1.4.4
  uiVersion: '1.0'
})

Vue.config.productionTip = false
// Vue.prototype.$baseUrl = process.env.baseUrl
Vue.use(ElementUI)
Vue.use(MyServerHttp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    Bus: new Vue()   },
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
