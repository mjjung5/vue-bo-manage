<template>
  <div class="slider_wrap">
    <!-- Nav Links -->
    <div ref="slider" class="sidenav">
      <div class="navtop border-bottom">
        <span></span>
        <a href="javascript:void(0)" class="closebtn" @click="closeMenu()">&times;</a>
      </div>
      <!-- list area-->
      <template class="just-padding">
        <div v-for="(item, idx) in navMenu" :key="item.id" :default-active="onRoutes">
          <div v-if="item.subs">
            <ul class="list-group list-group-root well">
              <li class="list-group" :index="item.index" :key="item.index" >
                <a v-b-toggle="'collapse' + idx" @click="goLinktab(item)"> {{ item.title }} </a>
                  <b-collapse v-for="subItem in item.subs" :key="subItem.index" class="list-group" :id="'collapse' + idx" >
                    <a class="list-group-item" @click="goLinktab(subItem)"> {{ subItem.title }}</a>
                  </b-collapse>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul :index="item.index" :key="item.index" class="list-group list-group-root well">
              <li class="list-group" v-b-toggle="'collapse' + idx" @click="goLinktab(item)">
                <a :id="'collapse' + idx">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
    <!-- Hamburger Menu -->
    <nav ref="menuIcon" class="topnav">
      <a href="javascript:void(0)" @click="openMenu()">
        <svg width="30" height="30" id="icoOpen">
          <path d="M0,5 30,5" :stroke="styles['menu-icon-color']" stroke-width="5"/>
          <path d="M0,14 30,14" :stroke="styles['menu-icon-color']" stroke-width="5"/>
          <path d="M0,23 30,23" :stroke="styles['menu-icon-color']" stroke-width="5"/>
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
import styles from '@/assets/sass/variables.scss'
import utilities from '@/js/utilities.js'
import { EventBus } from '@/eventbus.js'
export default {
  name: 'slider',
  props: {
    width: {
      type: Number,
      required: false,
      default: 250
    },
    format: {
      type: String,
      required: false,
      default: 'overlay'
    },
    direction: {
      type: String,
      required: false,
      default: 'left'
    },
    opacity: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      styles: styles,
      tagsList: [],
      selectedData: [],
      navMenu: [
        {
          index: 'dashboard',
          title: '회원정보',
          subs: [
            {
              // index: 'apply',
              title: '로드#입점신청',
              routerName: ''
            },
            {
              // index: 'manage',
              title: '판매자 정보관리'
            }
          ]
        },
        {
          index: 'table',
          title: '상품관리',
          subs: [
            {
              // index: 'search',
              title: '상품조회/수정'
            },
            {
              // index: 'reg',
              title: '상품등록/수정'
            },
            {
              // index: 'group',
              title: '상품그룹조회/수정'
            }
          ]
        },
        {
          // index: 'tabs',
          title: '배송관리'
        },
        {
          // index: '3',
          title: '클레임관리'
        },
        {
          // index: 'icon',
          title: '스토어관리',
          subs: [
            {
              index: 'profile',
              title: '스토어 프로필'
            },
            {
              index: 'promotion',
              title: '스토어 프로모션'
            },
            {
              index: 'plan',
              title: '스토어 기획전'
            }
          ]
        },
        {
          // index: 'manage-promo',
          title: '프로모션관리',
          subs: [
            {
              index: 'createcoupon',
              title: '쿠폰 생성'
            },
            {
              index: 'statecoupon',
              title: '쿠폰발행/조회'
            }
          ]
        },
        {
          // index: '6',
          title: 'Q&A관리'
        },
        {
          index: 'i18n',
          title: '광고수익'
        },
        {
          // index: '7',
          title: '판매자 서비스 센터',
          subs: [
            {
              index: 'permission',
              title: '전화연결'
            },
            {
              index: '404',
              title: '모바일샐러존'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    onRoutes () {
      // 사이드바 기본 설정을 라우터 이동으로 설정  default-active
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    init () {
      if (this.direction === 'right') {
        this.setRightMenu()
      } else {
        this.setLeftMenu()
      }
    },
    setLeftMenu () {
      this.$refs.slider.style.left = '0'
      this.$refs.menuIcon.style.float = 'left'
    },
    setRightMenu () {
      this.$refs.slider.style.right = '0'
      this.$refs.menuIcon.style.float = 'right'
    },
    openMenu () {
      if (this.opacity) {
        document.body.style.backgroundColor = utilities.hexToRGB(styles['background-color'], this.opacity)
      }
      switch (this.format) {
        case 'push':
          const width = this.width.toString() + 'px'
          this.$refs.slider.style.width = width
          let parentRefStyle = this.$parent.$refs.app.style
          if (this.direction === 'right') {
            parentRefStyle.marginRight = width
            parentRefStyle.transition = 'margin-right .5s'
          } else {
            parentRefStyle.marginLeft = width
            parentRefStyle.transition = 'margin-left .5s'
          }
          break
        case 'full':
          this.$refs.slider.style.width = '100%'
          break
        default:
          this.$refs.slider.style.width = this.width.toString() + 'px'
          break
      }
    },
    closeMenu () {
      this.$refs.slider.style.width = '0'
      this.$parent.$refs.app.style.marginLeft = '0'
      this.$parent.$refs.app.style.marginRight = '0'
      if (this.opacity) {
        document.body.style.backgroundColor = styles['background-color']
      }
    },
    goLinktab (tabMenu) {
      const isExist = this.tagsList.some(item => {
        // TODO:
        return item.title === !item.title
      })
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift()
        }
        this.tagsList.push({
          title: this.item
        })
      }
      EventBus.$emit('tabMenu', tabMenu.title)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/variables.scss';

  body {
    background-color: $background-color;
    transition: background-color .5s;
  }

  ul,li{
    list-style:none;
  }

  a{
    cursor: pointer;
  }

  /* The side navigation menu */
  .sidenav {
    font-family: $font-family-sans-serif;
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 47px; /* Stay at the top */
    background-color: $menu-background;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    text-align:left;
    /* Menu Links */
    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 15px;
      color: $menu-text;
      display: block;
      transition: 0.3s;
      &:hover {
        color: $menu-text-hover;
      }
    }
    .navtop{
      display:inline-block;
      width:100%;
      height:60px;
      background-color: red;
      position:absolute;
      top:0;
      left:0;
    }

    .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
      color:#fff;
    }
    /* Position and style the close button (top right corner) */

  }

  .slider_wrap{
    position:absolute;
    top:15px;
    left:0px;
    padding-left:10px;
    z-indeX:9999;

  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #app {
    transition: margin-left .5s;
    transition: margin-right .5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
      a {
        font-size: 18px;
      }
    }
  }

.just-padding {
  padding: 0px;
}

.list-group.list-group-root {
  padding: 0;
  overflow: hidden;
}

.list-group.list-group-root .list-group {
  margin-bottom: 0;
}

.list-group.list-group-root .list-group-item {
  border-radius: 0;
  border-width: 0px 0 0 0;
}

.list-group.list-group-root > .list-group-item:first-child {
  border-top-width: 0;
}

.list-group.list-group-root > .list-group > .list-group-item {
  padding-left: 30px;
}

.list-group.list-group-root > .list-group > .list-group > .list-group-item {
  padding-left: 45px;
  background:#fafafa;
}
</style>
