<template>
  <div>
    <b-card-group deck>
      <b-card v-bind:header="sellerData.title">
        <b-list-group
           v-for="item in sellerData.menuList"
          :key="item.index"
          >
          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            {{ item.name }}
            <b-badge variant="primary" pill>{{ item.num }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'seller-template',
  data () {
    return {
      // data

    }
  },
  props: {
    sellerData: {
      type: Object,
      required: true
    }
  },

  created () {
    console.log(this.sellerData)
  }
}
</script>
