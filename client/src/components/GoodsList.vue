<template>
  <v-container fluid grid-list-sm>
    <v-carousel hide-controls>
      <v-carousel-item v-for="(item,i) in carousel" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>

    <v-divider class="my-4 mx-auto" style="width: 80%;"></v-divider>

    <v-subheader style="font-size: 28px; color: #000; margin: -10px 0 10px;">محصولات ما</v-subheader>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-list style="direction: rtl">
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile v-else :key="item.title">
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" style="text-align: right"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
      <v-flex xs12 sm9>
        <v-layout row wrap>
          <v-flex xs12 sm4 v-for="(g,i) in goods" :key="i" class="pr-3 pb-3">
            <v-card>
              <router-link :to="'goods/' + g.id" tag="div">
                <v-card-media :src="g.image" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <GoodsDetail :detail="g.detail"/>
                </v-card-title>
              </router-link>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import GoodsService from '@/services/GoodsService'

  import GoodsDetail from './GoodsDetail'

  export default {
    name: "GoodsList",
    data() {
      return {
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
        goods: [],
        items: [
          { header: 'دسته بندی' },
          { title: 'لباس' },
          { divider: true, inset: true },
          { title: 'نرم افزار' },
          { divider: true, inset: true },
          { title: 'کالای دیجیتال' }
        ]
      }
    },
    mounted () {
      this.getGoods()
    },
    methods: {
      async getGoods () {
        const response = await GoodsService.fetchGoods()
        this.goods = response.data.goods
      }
    },
    components: {
      GoodsDetail
    }

  }
</script>

<style lang="scss" scoped>
  .card {
    cursor: pointer;
  }

  .divider--inset {
    margin: auto;
    width: calc(100% - 20px);
  }
</style>
