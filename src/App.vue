<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="title">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        id="testing"
        name="input-1"
        label="جستجو ..."
        v-show="searchField"
        transition="fade-transition"
      ></v-text-field>
      <v-btn icon @click.native.stop="searchField=!searchField">
        <v-icon>search</v-icon>
      </v-btn>
      <v-toolbar-items class="items">
        <v-btn flat>
          <span>{{cart}}</span>
          <v-icon medium right :color="color">shopping_cart</v-icon>
        </v-btn>

        <v-btn flat>
          <span>{{fullName}}</span>
          <v-avatar size="36">
            <img src="/static/profile.jpg">
          </v-avatar>
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
    <v-content style="direction: rtl" class="pa-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        title: 'فروشگاه ما',
        fullName: 'سید علی طباطبایی',
        cart: 'سبد خرید',
        color: 'teal',
        searchField: false,
      }
    },
    name: 'App'
  }
</script>

<style lang="scss">

  .input-group.input-group--text-field {
    direction: rtl;
    label {
      text-align: right;
      max-width: 100%;
      -webkit-transform-origin: top right;
      -moz-transform-origin: top right;
      -ms-transform-origin: top right;
      -o-transform-origin: top right;
      transform-origin: top right;
      padding-right: 5px;
    }
  }

  .title {
    color: #008080;
    font-weight: 400;
  }

  .items span {
    font-size: 16px;
    color: #555;
    margin-right: 5px;
  }

</style>
