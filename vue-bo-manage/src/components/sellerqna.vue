<template>
  <b-card-group deck>
    <b-card header="Q&A">
      <b-list-group>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
         미답변 고객문의
          <b-badge variant="primary" pill>0</b-badge>
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
