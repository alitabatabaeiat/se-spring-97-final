<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="$store.state.cart"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">
          <v-icon
            style="max-height: 48px; position: relative; top: 14px; color: #c62828; cursor: pointer; float: right;"
            @click="removeFromCart (props.item.id)">delete_forever
          </v-icon>
          <img :src="props.item.image" style="max-width: 100px; max-height: 48px; position: relative; top: 6%;"/>
          <span style="position:relative; top: -34%; margin-right: 5px;">{{ props.item.name }}</span></td>
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
        <td class="text-xs-center" ref="lastCol">{{ props.item.price * props.item.quantity | EngToFaNum }}</td>
        <!--<td class="text-xs-middle">{{ props.item.iron }}</td>-->
      </template>
    </v-data-table>
    <div class="totalPrice" :style="{width: totalPriceWidth + 'px'}">
      <div>جمع کل: {{$store.state.totalPrice | EngToFaNum}} تومان</div>
      <div>هزینه پیک: {{delivery | EngToFaNum}}‌ تومان</div>
      <div>قابل پرداخت: {{delivery + $store.state.totalPrice | EngToFaNum}}‌ تومان</div>
      <v-btn color="teal" class="checkout" @click="checkout" :disabled="checkoutDisabled" :dark="!checkoutDisabled">
        <span>پرداخت</span>
        <v-icon right>credit_card</v-icon>
      </v-btn>
    </div>

    <div style="margin: 20px 0;">
      <h2>انتخاب آدرس</h2>
    </div>
    <v-data-table
      :items="addresses"
      class="elevation-1"
      hide-actions
      select-all
      v-model="selected"
      :headers="[{
            text: 'ردیف',
            align: 'right',
            sortable: false,
            value: 'row'
          },
          {
            text: 'آدرس',
            align: 'right',
            sortable: false,
            value: 'address'
          }]"
      style="width: 70%;"
    >
      <template slot="items" slot-scope="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.row }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
      </template>
    </v-data-table>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">حذف از سبد کالا</v-card-title>
          <v-card-text>
            آیا مطمئن به حذف این کالا هستید؟
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="removeConfirmed">بله</v-btn>
            <v-btn color="green darken-1" flat @click.native="dialog = false">خیر</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-snackbar
      :timeout="5000"
      top
      color="success"
      v-model="snackbar"
    >
      به این تعداد از کالا نداریم
      <v-btn flat color="pink" @click.native="snackbar = false">بستن</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import GoodsService from '@/services/GoodsService'

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
            value: 'supplier'
          },
          {
            text: 'تعداد',
            align: 'middle',
            sortable: false,
            value: 'quantity'
          },
          {
            text: 'قیمت واحد',
            align: 'middle',
            sortable: false,
            value: 'price'
          },
          {
            text: 'قیمت کل',
            align: 'middle',
            sortable: false,
            value: 'totalPrice'
          },
        ],
        addresses: [
          {
            row: 1,
            address: 'خ امیرآباد شمالی بالاتر از خ جلال آل احمد دانشگاه تهران'
          }
        ],
        selected: [
          {
            row: 1,
            address: 'خ امیرآباد شمالی بالاتر از خ جلال آل احمد دانشگاه تهران'
          }
        ],
        totalPriceWidth: 200,
        delivery: 8000,
        checkoutDisabled: true,
        dialog: false,
        snackbar: false
      }
    },
    methods: {
      async changeQuantity(quantity, id) {
        quantity = this.$options.filters.FaToEngNum(quantity)
        const res = await GoodsService.fetchOneGoods(id)
        const q = res.data.goods.detail.quantity
        let p = this.$store.state.cart.find(p => {
          return p.id === id
        })
        if (q < parseInt(quantity) + parseInt(p.quantity)) {
          this.snackbar = true
          return
        }
        this.$store.commit('changeQuantity', {id, quantity})
      },
      removeFromCart(id) {
        this.dialog = true
        this.remove = id
      },
      removeConfirmed() {
        this.$store.commit('removeFromCart', this.remove)
        this.dialog = false
        if (this.$store.state.cart.length === 0)
          this.checkoutDisabled = true
      },
      async checkout() {
        const cart = this.$store.state.cart
        for (let i = 0; i < cart.length; i++)
          await GoodsService.updateOneGoods(cart[i].id, cart[i].quantity)
        this.$store.commit('clearCart')
        this.$router.push('/checkout')
      }
    },
    mounted() {
      let that = this;
      that.totalPriceWidth = that.$refs.lastCol.clientWidth
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.totalPriceWidth = that.$refs.lastCol.clientWidth
        });
      })
      if (this.$store.state.cart.length > 0)
        this.checkoutDisabled = false
    },
    watch: {
      selected(newVal) {
        if (newVal.length > 0) {
          this.delivery = 8000
          this.checkoutDisabled = false
        }
        else {
          this.delivery = 0
          this.checkoutDisabled = true
        }
      }
    },
    name: "Cart"
  }
</script>

<style scoped>

  .totalPrice {
    float: left;
    text-align: left;
    margin-top: 20px;
    margin-left: 20px;
  }

  .totalPrice div:nth-child(2), .totalPrice div:nth-child(3) {
    margin-top: 7px;
  }

  .checkout {
    direction: ltr;
    height: 45px;
    margin-left: 0;
    margin-top: 35px;
  }

  .dialog {
    direction: rtl;
  }

</style>
