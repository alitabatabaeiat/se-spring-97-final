<template>
  <v-data-table
    :headers="headers"
    :items="$store.state.cart"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.name }}</td>
      <td class="text-xs-center">{{ props.item.supplier }}</td>
      <td class="text-xs-center">
        <v-text-field
          id="testing"
          name="input-1"
          flat
          solo
          :value="props.item.quantity | EngToFaNum"
          @input="val => changeQuantity(val, props.item.id)"
          style="width: 80px; margin: 0 auto;"
        ></v-text-field>
      </td>
      <td class="text-xs-center">{{ props.item.price | EngToFaNum }}</td>
      <td class="text-xs-center">{{ props.item.price * props.item.quantity | EngToFaNum }}</td>
      <!--<td class="text-xs-middle">{{ props.item.iron }}</td>-->
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          {
            text: 'محصول',
            align: 'middle',
            sortable: false,
            value: 'name'
          },
          {
            text: 'فروشنده',
            align: 'middle',
            sortable: false,
            value: 'calories'
          },
          {
            text: 'تعداد',
            align: 'middle',
            sortable: false,
            value: 'fat'
          },
          {
            text: 'قیمت واحد',
            align: 'middle',
            sortable: false,
            value: 'carbs'
          },
          {
            text: 'قیمت کل',
            align: 'middle',
            sortable: false,
            value: 'protein'
          },
        ],
      }
    },
    methods: {
      changeQuantity (x, y) {
        x = this.$options.filters.FaToEngNum(x)
        this.$store.commit('changeQuantity', {id: y, quantity: x})
      }
    },
    name: "Cart"
  }
</script>

<style scoped>

</style>
