<template>
  <div>
    <b-card-group deck>
      <b-card header="주문현황">
        <b-list-group>
          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            신규주문
            <b-badge variant="primary" pill>{{ sellerData.orderStInfo.nowTotAmtToday }}</b-badge>
          </b-list-group-item>

          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            배송준비중
            <b-badge variant="primary" pill>{{ sellerData.orderStCntInfo.inDlvConfirm301 }}</b-badge>
          </b-list-group-item>

          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            배송중
            <b-badge variant="primary" pill>{{ sellerData.orderStCntInfo.inDlvConfirm401 }}</b-badge>
          </b-list-group-item>
          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            배송완료
            <b-badge variant="primary" pill>{{ sellerData.orderStCntInfo.inDlvConfirm501 }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>

    <b-card-group deck>
    <b-card header="클레임현황">
      <b-list-group>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          발송요청
          <b-badge variant="primary" pill>{{ sellerData.mainOrdClmStat.inDlvConfirm301_3month }}</b-badge>
        </b-list-group-item>

        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          취소요청
          <b-badge variant="primary" pill>{{sellerData.mainOrdClmStat.canceling}}</b-badge>
        </b-list-group-item>

        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          교환요청
          <b-badge variant="primary" pill>{{sellerData.mainOrdClmStat.exchange}}</b-badge>
        </b-list-group-item>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
          반품요청
          <b-badge variant="primary" pill>{{sellerData.mainOrdClmStat.returning}}</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>

    <b-card-group deck>
      <b-card header="판매현황">
        <b-list-group>
          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            오늘
            <b-badge variant="primary" pill>{{ sellerData.orderStInfo.nowTotAmtToday }}</b-badge>
          </b-list-group-item>

          <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
            이번주
            <b-badge variant="primary" pill>{{ sellerData.orderStInfo.nowTotAmtWeek }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
  </b-card-group>

  <div>
    <a href="#"><b-button block variant="outline-danger">상품등록</b-button></a>
  </div>

    <b-card-group deck>
    <b-card header="Q&A">
      <b-list-group>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
         미답변 고객문의
          <b-badge variant="primary" pill>{{ sellerData.qnaInfo.qnaCount }}</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>

  <b-card-group deck>
    <b-card header="광고현황">
      <b-list-group>
        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
         제안받은 광고
          <b-badge variant="primary" pill>{{ sellerData.advertInfo.adAccCnt }}</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>

  </div>
</template>

<script>
export default {
  name: 'seller-main',
  data () {
    return {
      // data
      sellerData: {}
    }
  },
  created () {
    this.$axios('./json/index.json')
      .then((res) => {
        this.sellerData = res.data.data
        console.log(this.sellerData)
      })
  }
}
</script>
