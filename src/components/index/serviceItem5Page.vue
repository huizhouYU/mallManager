<template>
  <div>
    <div class="list-item-pages">
      <div class="item" v-for="(item,index) in datList" :key=item.id>
        <img src="../../assets/images/index/equip1.png" alt="" />
        <div class="item-right">
          <div class="name">
            <p> {{item.name}}</p>
          </div>
          <div class="remark">
            <p class="price">{{item.price}}</p>
            <div class="address">
              <i class="iconfont">&#xeb33;</i>{{item.address}}
            </div>
          </div>
          <button class="btn"><i class="iconfont">&#xe88f;</i>在线咨询</button>
        </div>

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
        ]
      }
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .list-item-pages {
    width: 100%;
    margin-top: 10px;
    padding: 10px 20px 25px;
    // display: flex;
    // justify-content: space-around;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fill, 275px);
    justify-content: space-around;
    grid-row-gap: 10px;
    box-sizing: border-box;

    .item {
      width: 275px;
      height: 130px;
      display: flex;
      // flex-direction: column;
      border: 1px solid #eee;
      border-radius: 5px;
      align-items: center;
      box-sizing: border-box;

      img {
        width: 130px;
        height: 130px;
        border-radius: 5px;
        padding: 1px;
        box-sizing: border-box;
      }

      .item-right {
        width: 145px;
        height: 130px;

        .name {
          width: 100%;
          padding: 15px 32px 10px 13px;
          font-size: 0.875rem;
          box-sizing: border-box;

          p {
            width: 100%;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }


          // box-sizing: border-box;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
          // font-size: 0.875rem;
          // box-sizing: border-box;

          // -webkit-line-clamp: 2;//（行数）
          // -webkit-box-orient: vertical;
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
          margin-top: 10px;
          margin-bottom: 10px;

          i {
            margin-right: 6px;
          }
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
