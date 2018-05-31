<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="title">
        <router-link to="/" tag="span">{{title}}</router-link>
      </v-toolbar-title>
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
          <router-link to="/cart" tag="div">
            <span>سبد خرید</span>
            <v-badge v-model="cartLength" right>
              <span slot="badge">{{cartLength}}</span>
              <v-icon medium right :color="color">shopping_cart</v-icon>
            </v-badge>
          </router-link>
        </v-btn>

        <v-btn flat>
          <span class="name">{{user.firstName + ' ' + user.familyName}}</span>
          <v-avatar size="36">
            <img :src="user.image">
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
  import UsersService from '@/services/UsersService'

  export default {
    data() {
      return {
        title: 'فروشگاه ما',
        user: {},
        color: 'teal',
        searchField: false
      }
    },
    mounted() {
      this.getUser('5b0e7b5ed964481bdfdd1665')
    },
    computed: {
      cartLength() {
        return this.$store.state.cart.length
      }
    },
    methods: {
      async getUser(id) {
        const response = await UsersService.fetchOneUser(id)
        this.user = response.data.user
      }
    },
    name: 'App'
  }
</script>

<style lang="scss">

  .toolbar__title span {
    cursor: pointer;
  }

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

  .items span.name {
    font-size: 16px;
    color: #555;
    margin-right: 5px;
  }

</style>
