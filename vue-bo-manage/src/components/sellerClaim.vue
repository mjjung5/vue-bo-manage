<template>
  <b-card-group deck>
    <b-card header="클레임현황">
      <b-list-group>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          발송요청
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          취소요청
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>

        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          교환요청
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          반품요청
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'seller-claim',
  data () {
    return {
      // data
    }
  }
}
</script>
