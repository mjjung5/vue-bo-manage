<template>
<div class="header_wrap">
  <!-- Image and text -->
  <b-navbar variant="faded" class="navbar fixed-top bg-light border-bottom " type="light">
    <b-navbar-brand href="#" class="header_pd">
      <!-- <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten"> -->
      admin
    </b-navbar-brand>
    <div class="header_right">
      <!-- <b-button><icon name="bell"/> bell</b-button> -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- <b-button-group right>
        <b-dropdown right split text="admin">
          <b-dropdown-item>
            <a href="#none" target="_blank">Item 1</a>
          </b-dropdown-item>
          <b-dropdown-item>
            <a href="#none" target="_blank">Item 2</a>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <a href="#none" target="_blank">Item 3</a>
          </b-dropdown-item>
        </b-dropdown>
      </b-button-group> -->
    </div>
  </b-navbar>

</div>
</template>

<script>
// import slider from './Slider'

export default {
  name: 'selle-header',
  components: {
    // 'slider': slider
  },
  data () {
    return {
      // data
    }
  }
}
</script>

<style lang="scss">

.header_wrap{
  height:57px
}

.header_pd{
  padding-left:45px;
}

.navbar-toggle {
  position: relative;
  float: left; /*    float: right; 원래 */
  padding: 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: white;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.icon-bar{
  background-color: #563d7c;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggle .icon-bar+.icon-bar{
  margin-top: 4px;
}

.topnav{
  margin-right:20px;
}

.header_right{
    position:absolute;
    right:15px;
}

</style>
