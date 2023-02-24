<!-- 配件专区 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more" v-if="showTitle" :morePath="morePath" ></titleMore>
    <div class="item_content">
      <div class="item" v-for="(item,index) in accessoriesList" :key="index">
        <div class="flex-between-center item_top">
          <span class="item_top_title">{{item.cateName}}</span>
          <div class="item_more">
            <ul>
              <template v-for="(k,inde) in item.children">
                <li v-if="inde>2&& inde<7" @click="toGoods(k)">{{k.cateName}}</li>
              </template>
            </ul>
            <!-- <div class="flex-start-center more">
              <span>更多</span>
              <i class="iconfont">&#xe63c;</i>
            </div> -->
          </div>
        </div>
        <div class="item_bottom">
          <template v-for="(option,ind) in item.children">
            <div class="flex-column-between-center individual" @click="toGoods(option)" v-if="ind<3">
              <div class="individual_img">
                <img :src="option.image" alt="">
              </div>
              <div class="flex-column-around-center individual_name">
                <span class="name">{{option.cateName}}</span>
                <!-- <ul class="flex-center-center">
                <li v-for="(x,i) in option.label" :key="i">{{x}}</li>
              </ul> -->
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div v-show="showPage" class="flex-center-center pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import titleMore from '../../pages/index/titleMore.vue'
  import {
    listByGroup
  } from '@/api/index'
  export default {
    components: {
      titleMore
    },
    props: {
      title:String,
      groupId:[String,Number],
      showTitle: Boolean,
      morePath: String,
      showPage:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        // morePath: '/accessory',
        // title: "设备配件",
        currentPage4: 4,
        accessoriesList: [],
        chosedLevel:[]
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        var params = {
          limit: 6,
          groupId:this.groupId
        }
        if (!this.showTitle) {
          params.limit = 99
        } else {
          params.limit = 6
        }
        // 查询配件分类
        listByGroup(params).then(response => {
          this.accessoriesList = response.data
        })
      },
      toGoods(item) {
        var goodsType = ''
        if(this.groupId == 1){
          goodsType = 'material'
        }else if (this.groupId == '2'){
          goodsType = 'equipment'
        }
        this.getChosedLevel(item.cateName,item.parentId,'2')
        this.$router.push({
          path: '/medicalApparatus',
          query: {
            goodsType,
            cateId:item.cateId,
            chosedLevel: this.chosedLevel.join(' / ')
          }
        })
      },
      getChosedLevel(name, parerntId, level) {
        this.chosedLevel = []
        for (var i in this.accessoriesList) {
          if (level == '3') {
            for (var y in this.accessoriesList[i].children) {
              if (this.accessoriesList[i].children[y].cateId == parerntId) {
                this.chosedLevel.push(this.accessoriesList[i].cateName)
                this.chosedLevel.push(this.accessoriesList[i].children[y].cateName)
                this.chosedLevel.push(name)
                return
              }
            }
          } else if (level == '2') {
            if (this.accessoriesList[i].cateId == parerntId) {
              this.chosedLevel.push(this.accessoriesList[i].cateName)
              this.chosedLevel.push(name)
              return
            }
          }
        }
      },
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
      }
    },
  }
</script>

<style lang="less" scoped>
  .title_more {
    margin-bottom: 15px;
  }

  .item_content {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
  }

  .item {
    // position: relative;
    width: 595px;
    height: 280px;
    padding: 14px 0px 25px 0px;
    background: #FFFFFF;
    border-radius: 10px;
    box-sizing: border-box;

    .item_top {
      padding: 0px 28px 14px 20px;

      .item_top_title {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #333333;
      }

      .item_more {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        color: #999999;

        ul {
          display: flex;
          align-items: center;

          li {
            font-size: 10px;
            font-family: Microsoft YaHei;
            color: #666666;
            margin-right: 6px;
            cursor: pointer;
          }

          li:hover {
            color: #40A9FF;
          }
        }

        .more {
          cursor: pointer;

          i {
            font-size: 12px;
          }
        }

        .more:hover {
          color: #40A9FF;
        }
      }

    }

    .item_bottom {
      display: flex;
      align-items: center;

      .individual:hover {
        cursor: pointer;

        .individual_name {

          .name,
          ul {
            color: #40A9FF;
          }

          ul {
            li:first-child {
              border-color: #40A9FF;
            }
          }
        }
      }

      .individual {
        width: 200px;
        height: 210px;
        box-sizing: border-box;
        padding-left: 15px;
        border-right: 1px solid #F6F6F6;

        .individual_img {
          width: 142px;
          height: 142px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .individual_name {
          height: 68px;
          box-sizing: border-box;
          padding-top: 10px;

          .name {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 700;
            color: #333333;
          }

          ul {
            font-size: 12px;
            font-family: Microsoft YaHei;
            color: #666666;

            li {
              padding: 0px 0px 0px 4px;
              margin-top: px;
              height: 12px;
              line-height: 11px;
            }

            li:first-child {
              padding: 0px 4px 0px 0px;
              border-right: 1px solid #666666;
            }
          }
        }
      }

      .individual:last-child {
        border: none;
      }
    }
  }

  .pagination {
    margin: 30px 0px 5px 0px;
  }

  /deep/ .el-pagination {
    font-weight: 400;
  }

  /deep/ .el-pagination .el-select .el-input .el-input__inner {
    background-color: #f5f5f5;
  }

  /deep/.el-pagination .btn-next,
  /deep/.el-pagination .btn-prev,
  /deep/ .el-pager li {
    background: none;
  }
</style>
