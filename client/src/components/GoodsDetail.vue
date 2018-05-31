<template>
  <div>
    <h2>{{detail.name}}</h2>
    <h4>- تامین شده توسط <span class="supplierName">{{detail.supplier}}</span></h4>
    <v-btn :color="colors[Math.floor(parseFloat(detail.star.score))]" dark>
      <v-icon style="margin-left: 3px">stars</v-icon>
      <span>{{detail.star.score | EngToFaNum}}</span>
    </v-btn>
    <span>از {{detail.star.number | EngToFaNum}} رای</span>
    <h3>{{detail.price | EngToFaNum}} تومان</h3>
  </div>
</template>
<!--Math.floor(parseFloat(mapFaNumToEngNum(detail.star)))-->
<script>
  export default {
    // name: 'GoodsDetail',
    props: ['detail'],
    data() {
      return {
        colors: ['red darken-3', 'deep-orange darken-1', 'yellow darken-2', 'light-green darken-1', 'green darken-1', 'green darken-1'],
        // color:
      }
    }
  }
  // const
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  h4 {
    font-weight: 100;
    color: #555;

    span.supplierName {
      font-weight: 700;
      color: teal;
    }
  }

  .btn {
    min-width: 0;
    height: 30px;
    margin-right: 0;

    .btn__content {
      padding: 0 5px;
    }
  }

</style>
