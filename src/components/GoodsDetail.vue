<template>
  <div>
    <h2>{{detail.name}}</h2>
    <h4>- تامین شده توسط <span class="supplierName">{{detail.supplier}}</span></h4>
    <v-btn :color="colors[Math.floor(parseFloat(mapFaNumToEngNum(detail.star)))]" dark>
      <v-icon style="margin-left: 3px">stars</v-icon>
      <span>{{detail.star}}</span>
    </v-btn>
    <span>از {{detail.numOfVotes}} رای</span>
    <h3>{{detail.price}} تومان</h3>
  </div>
</template>

<script>
  export default {
    // name: 'GoodsDetail',
    props: ['detail'],
    data() {
      return {
        colors: ['red darken-3', 'deep-orange darken-1', 'yellow darken-2', 'light-green darken-1', 'green darken-1', 'green darken-1'],
        // color:
      }
    },
    methods: {
      mapFaNumToEngNum: (numStr) => {
        numStr = numStr + "";
        const faNums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        for (let i = 0; i < numStr.length; i++) {
          for (let j = 0; j < faNums.length; j++) {
            if (numStr[i] === faNums[j]) {
              numStr = numStr.replaceAt(i, j + '');
              break;
            }
          }
        }
        return numStr;
      }
    }
  }

  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };
  // const
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

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
