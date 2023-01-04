<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom" :events='events'>
      <!-- 点击显示标记 -->
      <el-amap-marker v-for="(marker, index) in markers" :key="marker.index" :position="marker.position"
        :icon="marker.icon" :title="marker.title" :events="marker.events" :visible="marker.visible"
        :draggable="marker.draggable" :vid="index"></el-amap-marker>
      </el-amap>
    <div class="dis-tan ju-cen">
    </div>
  </div>
</template>

<script>
  window._AMapSecurityConfig = {
    securityJsCode: "a9bac0c2bd3199880e0a511aeb299096"
  };
  export default {
    name: "v-map",
    props: {
      longitude:String,//经度
      latitude:String,//纬度
    },
    watch:{
      longitude(val){
        if(val != undefined && val != null && val !=''){
          this.center[0] = val
        }
      },
      latitude(val){
        if(val != undefined && val != null && val !=''){
          this.center[1] = val
        }
      }
    },
    data() {
      let self = this;
      return {
        tishi: '',
        //从这里下去是地图有关的
        address: '', //获取的位置
        zoom: 13, // 地图缩放
        // center: [122.59996, 26.197646], // 初始中心
        center: [117.30823, 31.863293], // 初始中心
        lng: 0, //经纬度
        lat: 0,
        loaded: false,
        // 点击显示的标记默认的定位
        markers: [],
        //  自动定位到当前位置
        plugin: [{
          timeout: 1000, //超过10秒后停止定位，默认：无穷大
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          pName: 'Geolocation',
          events: {
            init(o) {
              self.markers = [{
                position: self.center,
              }]
              self.loaded = true;
              self.$nextTick();
              // o 是高德地图定位插件实例
              // o.getCurrentPosition((status, result) => {
              //   console.log(result)
              //   if (result && result.position) {
              //     self.address = result.formattedAddress;
              //     self.lng = result.position.lng;
              //     self.lat = result.position.lat;
              //     self.center = [self.lng, self.lat];
              //     self.markers = [{
              //       position: self.center,
              //     }]
              //     self.loaded = true;
              //     self.$nextTick();
              //   } else {
              //     o.getCityInfo((status, result) => {
              //       if (result && result.center) {
              //         // self.address = result.formattedAddress;
              //         self.lng = result.center[0];
              //         self.lat = result.center[1];
              //         self.center = result.center;
              //         self.markers = [{
              //           position: self.center,
              //         }]
              //         self.loaded = true;
              //         self.$nextTick();
              //       }
              //     });
              //   }
              // });
            }
          }
        }],
        // 点击地图获取当前位置并显示标记
        events: {
          // click(e) {
          //   self.chaadd(e.lnglat)
          // }
        }
      }
    },
    created() {
      // console.log(this.address)
    },
    methods: {
      searchMap() {},
      chaadd(e) {
        let self = this;
        let {
          lng,
          lat
        } = e;
        self.lng = lng;
        self.lat = lat;
        self.center = [self.lng, self.lat];
        self.loaded = true;
        self.markers = [{
          position: self.center,
        }]
        var geocoder = new AMap.Geocoder({
          radius: 1000 //范围，默认：500
        });
        var marker = new AMap.Marker();

        function regeoCode() {
          var lnglat = [lng, lat]
          geocoder.getAddress(lnglat, function(status, result) {
            if (status === 'complete' && result.regeocode) {
              self.address = result.regeocode.formattedAddress;
            } else {
              console.log('根据经纬度查询地址失败')
            }
          });
        }
        regeoCode();
        self.$emit('mapDing', {lng,lat});
      },
    }
  }
</script>


<style scoped>
  .amap-page-container {
    height: 100%;
    /* height: 400px; */
    /* margin-top: 20px; */
    position: relative;
  }

</style>
