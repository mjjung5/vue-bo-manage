<template>
  <b-card-group deck>
    <b-card header="판매현황">
      <b-list-group>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          오늘
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          이번주
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'seller-sales',
  data () {
    return {
      // data
    }
  }
}
</script>
