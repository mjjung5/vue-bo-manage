<template>
  <div>
    <seller-header></seller-header>
    <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
    ></slider>
    <menu-tags></menu-tags>
    <seller-template v-if="listData.list1" :sellerData="listData.list1"></seller-template>
    <seller-template v-if="listData.list2" :sellerData="listData.list2"></seller-template>
  </div>
</template>

<script>
import sellerHeader from '@/components/sellerHeader'
import Slider from '@/components/Slider'
import menuTags from '@/components/menuTags'
import sellerTemplate from '@/components/sellerTemplate'

export default {
  name: 'seller-home',
  components: {
    'seller-header': sellerHeader,
    'slider': Slider,
    'menu-tags': menuTags,
    'seller-template': sellerTemplate
  },
  data () {
    return {
      // data
      listData: {},
      tagsList: [],
      tabMenu: [],
      collapse: false
    }
  },
  created () {
    this.$axios('./json/listdata.json')
      .then((res) => {
        this.listData = res.data.data
        console.log(this.listData)
      })
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box
}

ul,li{
  list-style: none;
}

.selector-for-some-widget {
  box-sizing: content-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
