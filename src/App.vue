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
      <v-container fluid grid-list-sm>
        <v-carousel hide-controls>
          <v-carousel-item v-for="(item,i) in carousel" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>

        <v-divider class="my-4 mx-auto" style="width: 80%;"></v-divider>

        <v-subheader style="font-size: 28px; color: #000; margin: -10px 0 10px;">محصولات ما</v-subheader>
        <v-layout row wrap>
          <v-flex xs12 sm3></v-flex>
          <v-flex xs12 sm9>
            <v-layout row wrap>
              <v-flex xs12 sm4 v-for="(g,i) in goods" :key="i" class="pr-3 pb-3">
                <v-card>
                  <v-card-media :src="g.img" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <GoodsDetail :detail="g.detail"/>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import GoodsDetail from './components/GoodsDetail'

  export default {
    data() {
      return {
        title: 'فروشگاه ما',
        fullName: 'سید علی طباطبایی',
        cart: 'سبد خرید',
        color: 'teal',
        searchField: false,
        carousel: [
          {
            src: '/static/1.jpg'
          },
          {
            src: '/static/2.jpg'
          },
          {
            src: '/static/3.jpg'
          }
        ],
        goods: [
          {
            img: '/static/3.jpg',
            detail: {
              name: 'لپ تاپ',
              supplier: 'سید علی طباطبایی',
              numOfVotes: '۲۲',
              star: '۳.۴',
              price: '۱۲۰۰۰'
            }
          },
          {
            img: '/static/1.jpg',
            detail: {
              name: 'آبمیوه',
              supplier: 'سید علی طباطبایی',
              numOfVotes: '۳۲',
              star: '۴.۱',
              price: '۱۲۰۲۰۰'
            }
          },
          {
            img: '/static/2.jpg',
            detail: {
              name: 'کفش ورزشی',
              supplier: 'سید علی طباطبایی',
              numOfVotes: '۱',
              star: '۰.۳',
              price: '۱۲۰'
            }
          }, {
            img: '/static/2.jpg',
            detail: {
              name: 'کفش ورزشی',
              supplier: 'سید علی طباطبایی',
              numOfVotes: '۱',
              star: '۱.۳',
              price: '۱۲۰'
            }
          },
          {
            img: '/static/3.jpg',
            detail: {
              name: 'لپ تاپ',
              supplier: 'سید علی طباطبایی',
              numOfVotes: '۲۲',
              star: '۲.۳',
              price: '۱۲۰۰۰'
            }
          }
        ]
      }
    },
    name: 'App',
    components: {
      GoodsDetail
    }
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

    input {
    }
  }

  .card {
    cursor: pointer;
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
