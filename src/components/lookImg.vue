<template>
  <div class="left_div">
    <div class="left">
      <!-- <img :src="mainImgUrl" class="img" ref="imgDiv" @mousedown.prevent="dropImage" @mousewheel.prevent='gunlun'> -->
      <img :src="mainImgUrl" class="img" >
    </div>
    <!-- <div class="img_wz">鼠标滚轮可控制图片缩放</div> -->
    <div>
      <i style="font-size: 30px;display: inline-block;position: relative;top: 40px;cursor: pointer;color:#999"
        class="el-icon-arrow-left" @click="imgLeft()"></i>
      <ul class="Img_ul">
        <li v-for="(item,index) in imgUrlList" :key="index" class="Img_li" :style="imgStyle"
          @click="changeImg(item, index)">
          <img :class="index === imgActiveIndex ? 'img_activeBorder' : ''" :src="item"
            style="width:50px;height:50px">
        </li>
      </ul>
      <i style="font-size: 30px;display: inline-block;position: relative;left: 325px;top: -70px;cursor: pointer;color:#999"
        class="el-icon-arrow-right" @click="imgRight()"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props:['imgUrlList','mainImgUrl'],
    data() {
      return {
        // mainImgUrl: '',
        imgActiveIndex: 0, // 当前移动图片的索引值
        imgDistance: 0, // 移动的距离
        allDistance: 0, // 总移动距离
      }
    },
    computed: {
      imgStyle() {
        return {
          transform: `translate3d(${this.imgDistance}px, 0, 0)` // 计算移动的距离(x,y,z)
        }
      },

    },
    methods: {
      changeImg(item, index) {
        this.mainImgUrl = item
        this.imgActiveIndex = index
        // this.resetImg();
      },
      resetImg() {
        this.$refs.imgDiv.style.zoom = '100%'
        var left = document.querySelector('.left')
        var img = document.querySelector('.img')
        img.style.left = 0 + 'px'
        img.style.top = 0 + 'px'
      },
      imgLeft() {
        if (this.imgActiveIndex > 0) {
          this.imgActiveIndex-- // 索引值-1
          this.imgUrlList.forEach((item, index) => { // 循环小图,通过判断索引值赋值给大图
            if (this.imgActiveIndex === index) {
              this.mainImgUrl = item
            }
          })
        }
        if (this.imgActiveIndex >= 4) {
          var index = 0
          const temp = window.setInterval(() => { // 利用定时器实现图片左右移动的动画效果
            if (index < 48) { // 移动次数(48次)
              this.imgDistance += 2 // 每次向左移动的距离 (移动总距离为48*this.imgDistance)
              index++
              return
            } else {
              window.clearInterval(temp) // 移动完清除定时器
            }
          }, 10)
        }
        // this.resetImg();
      },
      imgRight() {
        if (this.imgActiveIndex < this.imgUrlList.length - 1) {
          this.imgActiveIndex++
          this.imgUrlList.forEach((item, index) => {
            if (this.imgActiveIndex === index) {
              this.mainImgUrl = item
            }
          })
          if (this.imgActiveIndex >= 4) {
            this.allDistance = -96 * (this.imgActiveIndex - 4)
            var index = 0
            const temp = window.setInterval(() => {
              if (index < 48) {
                this.imgDistance -= 2 // 每次向右移动的距离
                index++
                return
              } else {
                window.clearInterval(temp)
              }
            }, 10)
          }
        } else if (this.imgActiveIndex === this.imgUrlList.length - 1) { // 到达最后一张图片，再点击跳转回第一张
          this.imgActiveIndex = 0;
          this.mainImgUrl = this.imgUrlList[0]
          var index = 0
          const temp = window.setInterval(() => { // 利用定时器实现图片左右移动的动画效果
            if (index < Math.abs(this.allDistance / 2)) { // 取绝对值再除
              this.imgDistance += 2 // 每次向左移动的距离 (移动总距离为48*this.imgDistance)
              index++
              return
            } else {
              window.clearInterval(temp) // 移动完清除定时器
            }
          }, 1)
        }
        // this.resetImg();
      },
      // 滚轮滑动
      gunlun(event) {
        //let direction = e.deltaY > 0 ? 'down' : 'up'
        //if (direction === 'up') {
        // 滑轮向上滚动
        //} else {
        // 滑轮向下滚动
        //}
        /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */
        var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100;
        /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
        zoom += event.wheelDelta / 12;
        /* 最小范围 和 最大范围 的图片缩放尺度 */
        if (zoom >= 80 && zoom < 500) {
          this.$refs.imgDiv.style.zoom = zoom + "%";
        }
        return false;
      },
      // 拖动图片
      dropImage(e) {
        e.preventDefault()
        // 获取元素
        var left = document.querySelector('.left')
        var img = document.querySelector('.img')
        var x = e.pageX - img.offsetLeft
        var y = e.pageY - img.offsetTop
        // 添加鼠标移动事件
        left.addEventListener('mousemove', move)

        function move(e) {
          img.style.left = e.pageX - x + 'px'
          img.style.top = e.pageY - y + 'px'
        }
        // 添加鼠标抬起事件，鼠标抬起，将事件移除
        img.addEventListener('mouseup', function() {
          left.removeEventListener('mousemove', move)
        })
        // 鼠标离开父级元素，把事件移除
        left.addEventListener('mouseout', function() {
          left.removeEventListener('mousemove', move)
        })
      },
    }
  }
</script>

<style scoped>
  .left_div {
    float: left;
    width: 100%;
    box-sizing: border-box;
    /* width: 560px; */
    /* margin-left: 20px;
    margin-top: 15px; */
  }

  .Img_ul {
    position: relative;
    display: flex;
    left: 24px;
    width: 300px;
    height: 80px;
    box-sizing: border-box;
    overflow: hidden;
    list-style: none;
  }

  .Img_li {
    float: left;
    margin: 0 8px;
    cursor: pointer;
  }

  .img_activeBorder {
    border: 2px solid #40A9ff;
  }

  .left {
    position: relative;
    width: 350px;
    height: 350px;
    background-color: #fff;
    overflow: hidden;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  .img_wz {
    float: right;
    font-size: 12px;
    margin-right: 15px;
    margin-top: 5px;
    color: #555;
  }

  .img {
    position: absolute;
    top: 0px;
    left: 0px;
  /*  max-width: 923px;
    max-height: 460px; */
    width: 100%;
    height: 100%;
    cursor: move;
  }
</style>
