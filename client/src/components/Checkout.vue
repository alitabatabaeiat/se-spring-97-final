<template>
  <v-card>
    <v-card-title primary-title>
      <div style="text-align: center; width: 100%; height: 100%;">
        <h3 class="headline mb-0">سفارش شما ثبت شد</h3>
        <div>یک ایمیل حاوی اطلاعات مورد نیاز برای شما ارسال شد.</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
    export default {
        name: "Checkout"
    }
</script>

<style scoped>

  .card {
    width: 500px;
    margin: auto;
  }

  .card .card__title {
    box-shadow: 1px 1px 5px #888;
    border: 0.5px solid #fff;
    background-color: #0fca1e;
    color: #fff;
  }

</style>
