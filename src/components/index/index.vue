<template>
  <div class="index-body">
    <!-- 模块一 -->
    <el-container class="module0-header">
      <!-- 头部搜索一栏 -->
      <el-header>
        <index-header class="index-header"></index-header>
      </el-header>
    </el-container>
    <!-- 模块二 -->
    <el-container class="module1-content index-content">
      <!-- 主体内容 -->
      <el-container class="index-main">
        <!-- 左侧导航 -->
        <el-aside width="200px" class="main-aside">
          <img src="../../assets/images/login_bg.png" />
          <brand-nav calss="brand-nav-box"></brand-nav>
        </el-aside>
        <!-- 右边内容-->
        <el-main>
          <!-- 头部导航 -->
          <div class="main-header-nav">
            <equip-nav></equip-nav>
          </div>
          <!-- 中间设备列表 + 右边发布需求 -->
          <div class="main-content">
            <!-- 中间设备列表 -->
            <div class="main-content-left">
              <equip-list-cart class="equipListCart-box"></equip-list-cart>
            </div>
            <!-- 右边发布需求 -->
            <div class="main-content-right">
              <!-- 发布需求 -->
              <div class="release-demand">
                <i class="iconfont">&#xe706;</i>
                <div class="titles">
                  <p class="title1">发布需求</p>
                  <p class="title2">求购设备、提供设备</p>
                  <button class="btn">立即发布</button>
                </div>
              </div>
              <!-- 热门求购 -->
              <div class="hot-shop-box">
                <div class="hot-title">
                  <i class="iconfont">&#xe606;</i>
                  <div class="hot-text">
                    <p class="text1">热门求购</p>
                    <p class="text2">各大医疗器械热门求购</p>
                  </div>
                </div>
                <ul class="hot-list">
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                  <li> <i class="iconfont">&#xea6c;</i> 动态血压记录分析系统</li>
                </ul>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <!-- 模块三 四张大图 -->
    <div class="modle3-picture">
      <div class="picture-item">
        <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
      <div class="picture-item">
        <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
      <div class="picture-item">
        <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
      <div class="picture-item">
        <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
    </div>
    <!-- 模块四 企业服务 -->
    <div class="modle4-enter-service">
      <div class="enter-service-header">
        <div class="service-choose">
          <div class="modle-title">企业服务</div>
          <el-select v-model="serviceType" placeholder="服务类别" class="service-choose-item service-type ">
            <el-option v-for="item in serviceTypeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="priceChoose" placeholder="价格预算" class="service-choose-item price-type ">
            <el-option v-for="item in priceOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="areaChoose" placeholder="可提供服务区域" class="service-choose-item area-type ">
            <el-option v-for="item in areaOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <img src="../../assets/images/index/majorRepair.png" alt="">
      </div>
      <service-item4-page></service-item4-page>
    </div>




  </div>

</template>

<script>
  import indexHeader from '../../components/index/indexHeader.vue'
  import equipNav from '../../components/index/equipNav.vue'
  import brandNav from '../../components/index/brandNav.vue'
  import equipListCart from '../../components/index/equipListCart.vue'
  import serviceItem4Page from '../../components/index/serviceItem4Page.vue'
  export default {
    components: {
      indexHeader,
      equipNav,
      brandNav,
      equipListCart,
      serviceItem4Page
    },
    data() {
      return {
        serviceType: '', //服务类型
        priceChoose: '', //价格预算
        areaChoose: '', //可提供服务区域
        serviceTypeOptions: [{
            value: '0',
            label: '服务类别'
          },
          {
            value: '1',
            label: '类别一'
          }, {
            value: '2',
            label: '类别二'
          }
        ],
        priceOptions: [{
          value: '1',
          label: '价格一'
        }, {
          value: '2',
          label: '价格二'
        }],
        areaOptions: [{
          value: '1',
          label: '区域一'
        }, {
          value: '2',
          label: '区域二'
        }]
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  .index-body {
    background-color: #f5f5f5;
    padding-bottom: 0.625rem;
    // padding: 0.625rem 3.125rem;
    // height: 100%;
  }
  .index-content {
    padding: 0.625rem 3.125rem;
    padding-top: 1.25rem;
    height: 100%;
  }
  /* 清除浮动 */
  .clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }
  /* 模块一 头部 */
  .module0-header {
    .el-header {
      padding: 0;
    }
  }
  .index-header {
    height: 3.75rem;
    background-color: #fff;
  }
  // 主体
  .index-main {
    background-color: #f5f5f5;
  }
  .main-aside {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 5rem;
    }
    .brand-nav-box {
      flex: 1;
    }
  }
  .el-main {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .main-header-nav {
    height: 5rem;
  }
  .main-content {
    flex: 1;
    display: flex;
    .main-content-left {
      flex: 1;
      .equipListCart-box {
        height: 100%;
      }
    }
    .main-content-right {
      width: 12.5rem;
      display: flex;
      flex-direction: column;
      // 发布需求
      .release-demand {
        height: 200px;
        width: 100%;
        background-color: #f3fbfe;
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          height: 5.9375rem;
          font-size: 3.125rem;
          line-height: 5.9375rem;
          color: #8dcfff;
        }
        .titles {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          // background-color: aquamarine;
          .title1 {
            font-size: 1rem;
            margin-bottom: 0.625rem;
          }
          .title2 {
            font-size: 0.75rem;
            color: #bebebe;
            margin-bottom: 0.625rem;
          }
          .btn {
            padding: 0.3125rem 1.25rem;
            background-color: #ffd571;
            color: #fff;
            border-radius: 0.3125rem;
            border: 1px solid #ffd571;
          }
        }
      }
      // 热门求购
      .hot-shop-box {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        flex: 1;
        .hot-title {
          height: 3.75rem;
          display: flex;
          i {
            width: 50px;
            font-size: 2rem;
            color: #ff8349;
            line-height: 3.75rem;
          }
          .hot-text {
            padding: 0.3125rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            .text1 {
              font-size: 1rem;
            }
            .text2 {
              font-size: 0.75rem;
              color: #bebebe;
            }
          }
        }
        .hot-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0.3125rem;
          li {
            font-size: 0.875rem;
          }
          i {
            color: #8dcfff;
            font-size: 0.375rem;
            transform: scale(0.5);
            transform-origin: 0 0;
            margin-right: 0.3125rem;
          }
        }
      }
    }
  }
  // 模块三 四张大图
  .modle3-picture {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 3.125rem;
    height: 180px;
    .picture-item {
      position: relative;
      width: 23%;
      img {
        width: 100%;
        height: 100%;
      }
      .name {
        width: 100%;
        height: 30%;
        line-height: 3.75rem;
        text-align: center;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        bottom: 0;
        color: #fff;
      }
    }
  }
  //模块四 企业服务
  .modle4-enter-service {
    margin: 0.625rem 3.125rem;
      background-color: #fff;
    .enter-service-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .service-choose {
      display: flex;
      align-items: flex-end;
      .modle-title {
        background-color: #8dcfff;
        color: #fff;
        letter-spacing: 0.1875rem;
        width: 15rem;
        height: 3.125rem;
        text-align: center;
        line-height: 3.125rem;
      }
      .service-choose-item {
        margin-left: 1.25rem;
        width: 7.5rem;
        height: 2.8125rem;
        .el-input__inner,
        .el-select .el-input .el-select__caret {
          color: #000;
        }
      }
      .area-type {
        width: 10.625rem;
      }
    }
    img {
      width: 10.375rem;
      height: 1.625rem;
    }
  }
</style>
