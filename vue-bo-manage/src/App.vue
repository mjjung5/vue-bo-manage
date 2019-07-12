<template>
  <div id="app" ref="app">
    <router-view></router-view>
    <!-- <seller-header></seller-header>
    <menu-tags></menu-tags>
    <seller-home></seller-home> -->
    <!-- <seller-main :propData="data.mainOrdClmStat" propTit="주문현황"></seller-main>
    <seller-main :propData="data.orderStInfo" propTit="주문현황"></seller-main>
    <seller-main :propData="data.orderStInfo" propTit="주문현황"></seller-main>
    <seller-main :propData="data4" propTit="주문현황"></seller-main> -->
    <!-- <seller-template v-if="listData.list1" :sellerData="listData.list1"></seller-template>
    <seller-template v-if="listData.list2" :sellerData="listData.list2"></seller-template> -->
</div>
</template>

<script>
// import sellerHeader from '@/components/sellerHeader'
// import sellerMain from './components/sellerMain'
// import sellerTemplate from '@/components/sellerTemplate'
// import menuTags from '@/components/menuTags'
// import sellerHome from '@/components/sellerHome'

export default {
  name: 'App',
  components: {
    // 'seller-header': sellerHeader,
    // 'seller-template': sellerTemplate,
    // 'menu-tags': menuTags,
    // 'seller-home': sellerHome
  },
  data () {
    return {
      // listData: {},
      // tagList: [],
      // collapse: false
    }
  },
  created () {
    // this.$axios('./json/listdata.json')
    //   .then((res) => {
    //     this.listData = res.data.data
    //     console.log(this.listData)
    //   })
  }

}
</script>
