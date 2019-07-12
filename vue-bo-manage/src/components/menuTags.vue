<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item, index) in tagsList" :key="index">
        <a class="tags-li-title">
          {{item.title}}
        </a>
      </li>
    </ul>
    <div class="tags-close-box">
      <b-dropdown size="sm" text="삭제" class="m-2">
        <b-dropdown-item-button>선택메뉴 외 닫기</b-dropdown-item-button>
        <b-dropdown-item-button>전체삭제</b-dropdown-item-button>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/eventbus.js'
export default {
  name: 'menu-tags',
  data () {
    return {
      // data
      tagsList: [
        {
          id: 1,
          title: '로드#입점신청',
          path: this.$route
        },
        {
          id: 2,
          title: '판매자 정보관리',
          path: this.$route
        }
      ]
    }
  },
  computed: {
    showTags () {
      return this.tagsList.length > 0
    }
  },
  created () {
    EventBus.$on('tabMenu', (item) => {
      this.tagsList.push({
        title: item
      })
    })
  }
}
</script>

<style lang="scss">

    .tags {
        position: relative;
        width:100%;
        height: 30px;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd;
    }

    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        color: #fff;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        height: 30px;
        background: #fff;
        box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        z-index: 10;
    }

    </style>
