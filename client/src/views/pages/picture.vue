<template>
  <div class="picture">
    <card-cmp />
  </div>
</template>

<script>
import cardCmp from '../../components/picture/card.vue'
export default {
  components: {
    cardCmp,
  }
}
</script>

<style lang="less" scoped>
.picture{
  color: #fff;
}
</style>