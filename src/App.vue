<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="title">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
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
    <v-content style="direction: rtl">
      <v-container fluid>
        <v-carousel hide-controls>
        <v-carousel-item v-for="(item,i) in carousel" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>

        <v-divider class="my-4 mx-auto" style="width: 80%;"></v-divider>

        <v-subheader style="font-size: 28px; color: #000; margin: -10px 0 10px;">محصولات ما</v-subheader>
        <v-layout>
          <v-flex xs12 sm4 class="pl-3">
            <v-card>
              <v-card-media src="/static/1.jpg" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3>آبمیوه</h3>
                </div>
              </v-card-title>
              <v-card-actions style="direction: ltr">
                <v-btn flat :color="color">مشاهده</v-btn>
                <v-btn flat :color="color">خرید</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 class="pl-3">
            <v-card>
              <v-card-media src="/static/2.jpg" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3>کفش ورزشی</h3>
                </div>
              </v-card-title>
              <v-card-actions style="direction: ltr">
                <v-btn flat :color="color">مشاهده</v-btn>
                <v-btn flat :color="color">خرید</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media src="/static/3.jpg" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3>لپ تاپ</h3>
                </div>
              </v-card-title>
              <v-card-actions style="direction: ltr">
                <v-btn flat :color="color">مشاهده</v-btn>
                <v-btn flat :color="color">خرید</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
        ]
      }
    },
    name: 'App',
  }
</script>

<style>

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
