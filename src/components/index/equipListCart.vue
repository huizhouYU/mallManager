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
    height: 37.3125rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 0.625rem;
  }

  .item-cart {
    width: 30%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0.3125rem;
    margin: 0.625rem;
    margin-bottom: 0;
    border-radius: 0.625rem;

    img {
      height: 100px;
      width: 100%;
    }

    .name {
      font-size: 0.875rem;
    }

    .remark {
      color: #b6b6b6;
      font-size: 0.75rem;
    }
  }
</style>
