<template>
  <div class="well">
    <v-layout class="pt-3 px-4">
      <v-flex sm5 class="pl-3" style="border-left: 1px solid #8888">
        <img :src="goods.image"/>
        <GoodsDetail :detail="goods.detail"/>

        <v-divider class="my-4" style="width: 400px;"></v-divider>

        <h2>اطلاعات تکمیلی</h2>
        <div>{{goods.description}}</div>

        <v-btn dark color="teal" class="add-to-cart" @click="addToCart">
          <span>افزودن به سبد خرید</span>
          <v-icon right>add_shopping_cart</v-icon>
        </v-btn>
      </v-flex>
      <v-flex sm7 class="pr-3">
        <v-text-field
          name="input-7-1"
          label="نظر خود را بنویسید..."
          multi-line
        ></v-text-field>
        <v-btn dark color="teal" class="add-to-cart">
          <span>ارسال نظر</span>
          <v-icon right>comment</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import GoodsDetail from './GoodsDetail'
  import GoodsService from '@/services/GoodsService'

  export default {
    data() {
      return {
        goods: {}
      }
    },
    components: {
      GoodsDetail
    },
    mounted() {
      console.log(this.$route.params)
      this.getGoods()
    },
    methods: {
      async getGoods() {
        const response = await GoodsService.fetchOneGoods(this.$route.params.id)
        console.log(response)
        this.goods = response.data.goods
      },
      addToCart () {
        this.$store.commit('addToCart', this.goods)
        this.$router.push('/cart')
      }
    },
    name: "GoodsView"
  }
</script>

<style lang="scss" scoped>

  .well {
    background-color: #fff;
    box-shadow: 1px 1px 5px #888;
    padding: 20px;

    img {
      width: 100%;
    }

    .btn.add-to-cart {
      direction: ltr;
      height: 45px;
      margin-right: 0;
      float: left;
    }
  }

</style>
