<template>
  <div class="amap-page-container">
    <!-- 百度地图  -->
    <div id="bai-du-map">
      <!-- 技术支持和联系方式  -->
    </div>
  </div>
</template>

<script>
  window._AMapSecurityConfig = {
    // 设置安全密钥
    securityJsCode: '9ac444e6943626216ac1428ea09c45fa',
  }
  import AMapLoader from "@amap/amap-jsapi-loader";

  export default {
    props: {
      longitude: { //经度
        type: Number||string,
        default: 117.289758
      },
      latitude: { //纬度
        type: Number||string,
        default: 31.867761
      }
      // longitude: String,
      // latitude: String, //纬度
    },
    watch: {
      longitude(val) {
        if (val != undefined && val != null && val != '') {
          this.position[0] = val
          this.initMap()
        }
      },
      latitude(val) {
        if (val != undefined && val != null && val != '') {
          this.position[1] = val
          this.initMap()
        }
      }
    },
    data() {
      return {
        position: [117.289758, 31.867761],
        map: null,
        mouseTool: null,
        overlays: [],
        auto: null,
        placeSearch: null,
        marker: null
      }
    },
    methods: {
      initMap() {
        AMapLoader.load({
          "key": "351fa1549567026aba8fb335fe01e931", // 申请好的Web端开发者Key，首次调用 load 时必填
          "version": "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          // "plugins": ["AMap.AutoComplete", "AMap.PlaceSearch"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
          // "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap) => {
          this.map = new AMap.Map('bai-du-map', {
            viewMode: "2D", //  是否为3D地图模式
            zoom: 14, // 初始化地图级别
            center: this.position, //中心点坐标  合肥软件园
            resizeEnable: true
          });
          // 标记
          this.marker = new AMap.Marker({
            position: this.position // 基点位置
          });
          // 地图添加标记
          this.map.add(this.marker);

        }).catch(e => {
          console.log("错误：",e);
        });
      },
    },
    mounted() {
      this.initMap();
    },
  };
</script>
<style>
  .amap-page-container {
    height: 100%;
    position: relative;
  }

  #bai-du-map {
    height: 100%;
  }

  .amap-logo {
    display: none;
    opacity: 0 !important;
  }

  .amap-copyright {
    opacity: 0;
  }
</style>
