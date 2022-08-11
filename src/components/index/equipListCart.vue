<template>
  <div class="listicarts">
    <div class="item-cart" v-for="(item,index) in equipLists" :key="item.id">
      <!-- <img :src="item.imgPath" alt="图片无法加载"> -->
      <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
      <p class="name">{{item.name}}</p>
      <p class="remark">{{item.remark}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        equipLists: [{
            id: '1',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: './assets/images/index/equip1.png'
          },
          {
            id: '2',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '3',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '4',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '5',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '6',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '7',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '8',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          },
          {
            id: '9',
            name: '骨密度器',
            remark: '提供90天保修',
            imgPath: '../../assets/images/index/equip1.png'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .listicarts {
    box-sizing: border-box;
    height: 740px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // padding: 0 0.625rem;
  }

  .item-cart {
    width: 230px;
    height: 190px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px 20px 20px 20px;
    border-radius: 5px;

    img {
      height: 100px;
      width: 100%;
    }

    .name {
      font-size: 16px;
      color: #333;
    }

    .remark {
      color: #b0b0b0;
      font-size: 14px;
    }
  }
</style>
