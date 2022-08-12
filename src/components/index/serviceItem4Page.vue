<template>
  <div>
    <div class="list-item-pages">
      <div class="item" v-for="(item,index) in datList" :key=item.id>
        <img src="../../assets/images/index/equip1.png" alt="">
        <div class="name">{{item.name}}</div>
        <div class="remark">
          <p class="price">{{item.price}}</p>
          <div class="address">
            <i class="iconfont">&#xeb33;</i>{{item.address}}
          </div>
        </div>
        <button class="btn"><i class="iconfont">&#xe88f;</i>在线咨询</button>
      </div>
    </div>

    <!-- 分页 -->
   <!-- <el-pagination layout="prev, pager, next" :total="1000">
    </el-pagination> -->

  </div>

</template>
<script>
  export default {
    data() {
      return {
        datList: [{
            id: '1',
            imgPath: '',
            name: '核磁共振专业资深工程师专业维修上门售后',
            price: '￥999',
            address: '合肥'
          },
          {
            id: '2',
            imgPath: '',
            name: '核磁共振专业资深工程师专业维修上门售后',
            price: '￥999',
            address: '合肥'
          },
          {
            id: '3',
            imgPath: '',
            name: '核磁共振专业资深工程师专业维修上门售后',
            price: '￥999',
            address: '合肥'
          },
          {
            id: '4',
            imgPath: '',
            name: '核磁共振专业资深工程师专业维修上门售后',
            price: '￥999',
            address: '合肥'
          },
          {
            id: '5',
            imgPath: '',
            name: '核磁共振专业资深工程师专业维修上门售后',
            price: '￥999',
            address: '合肥'
          },
        ]
      }
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .list-item-pages {
    width: 100%;
    margin-top: 0.625rem;
    padding: 10px 0;
    // display: flex;
    // justify-content: space-around;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    justify-content: space-around;
    grid-row-gap: 10px;

    .item {
      width: 220px;
      height: 335px;
      display: flex;
      flex-direction: column;
      border: 1px solid #eee;
      border-radius: 0.3125rem;
      align-items: center;

      img {
        width: 100%;
        height: 13.75rem;
        border-radius: 0.3125rem;
      }

      .name {
        width: 100%;
        padding: 15px 32px 13px 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.875rem;
        box-sizing: border-box;
      }

      .remark {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .price {
          font-size: 0.875rem;
          margin-left: 13px;
        }

        .address {
          i {
            margin-right: 8px;
          }

          font-size: 14px;
          margin-right: 32px;
        }
      }

      .btn {
        width: 110px;
        height: 30px;
        background-color: #8DCFFF;
        color: #fff;
        border: none;
        margin-top: 20px;
        margin-bottom: 10px;

        i {
          margin-right: 6px;
        }
      }
    }
  }

  .el-pagination {
    display: flex;
    justify-content: center;
    color: #747474;
    font-weight: 500;
  }
</style>
